import datetime
import json as jjson
import pathlib
import aiohttp
import sanic
from collections import Counter

from sanic.exceptions import NotFound
from sanic.response import empty, json

app = sanic.Sanic(name="index")


async def getuserip(ip):
    async with aiohttp.request('GET', 'http://freeapi.ipip.net/' + ip) as pp:
        rrr = await pp.json()
        print(rrr)
        return rrr


async def handle():
    item_list = []
    today = datetime.datetime.today().strftime('%Y-%m-%d')
    p = pathlib.Path('../ocserv-records/' + today)
    for j in p.iterdir():
        try:
            f = open(j)
            data = jjson.load(f)
            item_list += data
        except:
            pass

    item_list.sort(key=lambda it: it['Username'])

    for item in item_list:
        # print(item.keys())
        popKeys = ['ID', 'Groupname', 'State', 'Device', 'MTU', 'Location', 'Local Device IP',
                   'IPv4', "P-t-P IPv4", "RX", "TX", "DPD", 'KeepAlive', 'Full session', "Raw cookie",
                   "Cookie", "Session", 'DNS', 'NBNS', 'Split-DNS-Domains', 'Routes', 'No-routes', 'iRoutes',
                   'Restricted to routes', "Restricted to ports", 'TLS ciphersuite', 'DTLS cipher'
                   ]
        for k in popKeys:
            try:
                item.pop(str(k))
            except:
                pass

    cleaned_data = {}
    period_list = {}
    for i in range(0, len(item_list)):
        # print(i, item_list[i])
        if i + 1 >= len(item_list):
            break
        if item_list[i]['Username'] == "(none)": continue
        # print(item_list[i]['Username'], item_list[i + 1]['Username'])
        name = item_list[i]['Username'] + '#' + item_list[i]['Connected at']
        if item_list[i]['Username'] == item_list[i + 1]['Username'] and item_list[i]['Connected at'] == \
                item_list[i + 1]['Connected at'] or item_list[i]['Username'] != item_list[i + 1]['Username']:
            # 下面2行可以打开，可以关闭
            period_list[name] = period_list.get(name, []) + [str(item_list[i]['_Connected at']).strip()]
            item_list[i]['period_list'] = period_list[name][-1]  # -1取的是最后一个时间，也就是末尾片的时间
            # item_list[i]['Remote IP'] = 'http://freeapi.ipip.net/'+str(item_list[i]['Remote IP']) #[item_list[i]] + await getuserip(item_list[i]['Remote IP'])
            item_list[i]['Remote IP'] = 'https://whois.pconline.com.cn/ipJson.jsp?ip={0}&json=true'.format(
                str(item_list[i]['Remote IP']))  # [item_list[i]] + await getuserip(item_list[i]['Remote IP'])

            cleaned_data[name] = item_list[i]

    return cleaned_data
    # pp.pprint(cleaned_data)
    # pf = open('./out.json', mode='w+')
    # json.dump(cleaned_data, fp=pf)


@app.route('/')
async def index(request):
    # print(request)
    cleaned_data = await handle()
    user_count = len(set([str(username).split("#")[0] for username in cleaned_data.keys()]))
    count = len(cleaned_data.keys())
    login_detail = Counter([str(username).split("#")[0] for username in cleaned_data.keys()])
    # login_detail = sorted(Counter([str(username).split("#")[0] for username in cleaned_data.keys()]).items(),key=lambda x: x[1], reverse=True)
    # login_detail = OrderedDict()
    # for item in sorted(Counter([str(username).split("#")[0] for username in cleaned_data.keys()]).items(),key=lambda x: x[1], reverse=True):
    #     login_detail[item[0]] = item[1]
    # print(login_detail.items())
    return json({'user_count': user_count, 'count': count, 'login_detail': login_detail, 'detail': cleaned_data})


if __name__ == "__main__":
    app.error_handler.add(NotFound, lambda r, e: empty(status=404))
    app.run(host='0.0.0.0', port=8008, auto_reload=True)
