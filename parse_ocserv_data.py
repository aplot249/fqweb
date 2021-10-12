# @author: sareeliu
# @date: 2021/10/12 13:44
import json
import os
import pathlib
import pprint

pp = pprint.PrettyPrinter()
item_list = []
p = pathlib.Path('./ocserv-records')
json_list = os.listdir(p)
for j in json_list:
    f = open(p.joinpath(j))
    data = json.load(f)
    item_list += data

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
    # print(item_list[i]['Username'], item_list[i + 1]['Username'])
    name = item_list[i]['Username'] + '#' + item_list[i]['Connected at']
    if item_list[i]['Username'] == item_list[i + 1]['Username'] and item_list[i]['Connected at'] == item_list[i + 1]['Connected at'] or item_list[i]['Username'] != item_list[i + 1]['Username']:
        # 下面2行可以打开，可以关闭
        period_list[name] = period_list.get(name, []) + [str(item_list[i]['_Connected at']).strip()]
        item_list[i]['period_list'] = period_list[name][-1] # -1取的是最后一个时间，也就是末尾片的时间
        cleaned_data[name] = item_list[i]

    # if item_list[i]['Username'] != item_list[i + 1]['Username']:
    #     period_list[name] = period_list.get(name, []) + [str(item_list[i]['_Connected at']).strip()]
    #     item_list[i]['period_list'] = period_list[name]
    #     cleaned_data[name] = item_list[i]

pp.pprint(cleaned_data)
pf = open('./out.json', mode='w+')
json.dump(cleaned_data, fp=pf)
# pp = pprint.PrettyPrinter(indent=4)
# pp.pprint(sorted(item_list, key=lambda it: [it['Username'], it['Connected at']]))
