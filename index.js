function submit(cookieValue) {
    const cookie = cookieValue
    const q1 = '[{"name":"CJXSZ","caption":"成绩显示值","linkOpt":"AND","builderList":"cbl_String","builder":"equal","value":"'
    const q2 = '"}]'
    for (var i = 60; i <= 100; i += 0.1) {
        const q = i.toFixed(1)
        const qq = q1 + q + q2
        fetch("http://ehall.xidian.edu.cn/gsapp/sys/wdcjapp/modules/wdcj/xscjcx.do", {
            "headers": {
                "accept": "*/*",
                "accept-language": "zh-CN,zh;q=0.9,zh-HK;q=0.8,zh-TW;q=0.7",
                "cache-control": "no-cache",
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "pragma": "no-cache",
                "x-requested-with": "XMLHttpRequest",
                "cookie": cookie
            },
            // "referrer": "http://ehall.xidian.edu.cn/gsapp/sys/wdcjapp/*default/index.do?amp_sec_version_=1&gid_=bVBITzgvdVBERFBhOFlkKzJQUVkxOVNGaHErdHpVVUZSM3ZhSkZVZCtwOUMwOTFRbTFZeE1LLysrZmJ6NXQzTUNHRmNZcklFRzl4Yk91bEVrQjRDb1E9PQ&EMAP_LANG=zh&THEME=cherry",
            // "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "querySetting=" + qq + "&_gotoFirstPage=true",
            "method": "POST",
            "mode": "cors"
        },)
            .then(res => res.json())
            .then(json => {
                if (json.datas.xscjcx.totalSize != 0) {
                    console.log(q)
                    for (var j = 0; j < json.datas.xscjcx.totalSize; j++) {
                        console.log(json.datas.xscjcx.rows[j]["KCMC"])
                    }
                }
            });
    }
}