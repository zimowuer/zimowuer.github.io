// word.js
const contentData = {
    games: [
        {
            title: "游戏区简介",
            description:"欢迎来到游戏区,这里聚集了众多优秀开发者的作品(包括我的),有些作品被我修改并添加了一些辅助\r\n并且对游戏的好玩程度进行分级\r\n祝你玩得愉快"
        },
        //级别:超级推荐
        {
            title: "Minecraft 2D(电脑)(supa推荐)",
            description: "操作方式在游戏开始界面。",
            link: "网站/我的世界.html",
            imgSrc: "素材/我的世界.jpeg"
        },
        {
            title: "Among Us (在线游戏)(电脑/手机)(supa推荐)",
            description: "操作方式:wsad移动,手机的移动方式有两种,默认是按动行走,还有一种是键盘\r\n,需在设置里调,通过点击打开地图,设置等功能。",
            link: "网站/Among Us (在线游戏).html",
            imgSrc: "素材/内鬼.jpg"
        },
        //级别:中等推荐
        {
            title: "3D迷宫(电脑)(中等推荐)",
            description: "WSAD移动,上下左右移动视角空格跳跃,鼠标停留在游戏窗口接近顶部的位置可唤起菜单栏,对应按键可实现对应功能",
            link: "网站/3D迷宫.html",
            imgSrc: "素材/我的世界.jpeg"
        },
        {
            title: "（转载）3D吃鸡(电脑)(中等推荐)",
            description: "吃鸡(WSAD移动,上下左右移动视角,f攻击,b大幅度转动视角),鼠标点击对应按键可实现对应功能",
            link: "网站/（转载）3D吃鸡.html",
            imgSrc: "素材/吃鸡.jpg"
        },
        {
            title: "我的世界3D(电脑)(中等推荐)",
            description: "操作方式，wsad移动。",
            link: "网站/3D版我的世界.html",
            imgSrc: "素材/我的世界.jpeg"
        },
        {
            title: "元气骑士(手机/电脑)(中等推荐)",
            description: "操作方式，wsad移动+鼠标点击，手机端屏幕按键。",
            link: "网站/元气骑士破解版.html",
            imgSrc: "素材/元气骑士.webp"
            
        },
        {
            title: "超级马里奥3(电脑)(中等推荐)",
            description: "操作方式，wsad移动空格跳跃和选中。",
            link: "网站/超级马里奥3.html",
            imgSrc: "素材/内鬼.jpg"
            
        },
        {
            title: "三国杀1V1（对战人机）(手机/电脑)(中等推荐)",
            description: "操作方式，点击",
            link: "网站/三国杀1V1（对战电脑）.html",
            imgSrc: "素材/三国杀ISO.ico"
            
        },
        {
            title: "我的世界起床战争(外挂版)(电脑)(中等推荐)",
            description: "WSAD移动,空格攻击,鼠标点击悬浮窗即可唤起外挂辅助,对应按键可实现对应功能,鼠标拖动悬浮窗即可关闭外挂辅助悬浮窗",
            link: "网站/我的世界起床战争(外挂版).html",
            imgSrc: "素材/我的世界.jpeg"
        },
        {
            title: "登山赛车(中等推荐)",
            description: "WSAD移动,上下左右移动视角空格跳跃,鼠标停留在游戏窗口接近顶部的位置可唤起菜单栏,对应按键可实现对应功能",
            link: "网站/登山赛车.html",
            imgSrc: "素材/我的世界.jpeg"
        },
        {
            title: "多星体万有引力模拟(电脑)(中等推荐)",
            description: "一个宇宙模拟器,操作方式，里面有。",
            link: "网站/多星体万有引力模拟.html",
            imgSrc: "素材/wpISO.ico"
        },
        //级别:较为推荐
        {
            title: "坑爹跑酷 (电脑)(有挂，按n键)(较为推荐)",
            description: "2D游戏,操作方式，wad控制方向,R键重新开始,有外挂，按n键传送至鼠标当前位置",
            link: "网站/坑爹跑酷 (有挂，按n键).html",
            imgSrc: "素材/火.ico"
        },
        {
            title: "飞(手机/电脑)(较为推荐)",
            description: "操作方式，鼠标点击。",
            link: "网站/飞.html",
            imgSrc: "素材/内鬼.jpg"
        },
        {
            title: "古代战争模拟器(手机/电脑)(较为推荐)",
            description: "鼠标点击",
            link: "网站/古代战争模拟器.html",
            imgSrc: "素材/拳王.jpeg"
        },
        {
            title: "建造属于你自己的跑酷(电脑)(较为推荐)",
            description: "鼠标点击,wsad移动",
            link: "网站/建造属于你自己的跑酷.html",
            imgSrc: "素材/元气骑士.webp"
        },
        //级别:一点推荐
        {
            title: "迷你格斗(电脑)(一点推荐)",
            description: "ad移动,w攻击,s防御",
            link: "网站/迷你格斗.html",
            imgSrc: "素材/wpISO.ico"
        },
        //级别:占位符
        {
            title: "贪吃蛇 v2.0(电脑)(占位符)",
            description: "wsad移动,头碰到别人的身体即为死亡",
            link: "网站/贪吃蛇 v2.0.html",
            imgSrc: "素材/贪吃蛇.jpeg"
        }
        // 可以添加更多游戏内容对象
    ],
    tools: [
        {
            title:"聊天室(zl专属加密版)",
            description:"利用网页搭建起来的密码聊天室,需要输入密钥进入",
            link:"网站/聊天室(zl专属版).html"
        },
        {
            title: "我的世界动画，紫罗兰(推荐)",
            description: "\"紫罗兰\"是一款专为Minecraft玩家设计的创意工具，旨在让用户能够轻松制作精美的Minecraft动画。无论您是一个有经验的动画制作者，还是刚刚踏入动画创作的世界，\"紫罗兰\"都为您提供了一个直观且强大的平台，让您的创意得以实现。",
            link: "https://www.mineimator.com/"
        },
        {
            title: "Kali Linux渗透系统(推荐)",
            description: "Kali Linux 是一款专为网络渗透测试和安全审计而设计的先进 Linux 发行版。作为一个广受欢迎的渗透测试工具集，Kali Linux 提供了丰富的功能和工具，为安全专业人士、研究人员以及白帽黑客提供了一个强大的平台，用于评估网络系统的安全性，发现漏洞并保护网络免受潜在的威胁。",
            link: "https://www.kali.org/"
        },
        {
            title: "B站",
            description: "Bilibili（哔哩哔哩，简称B站）是一个充满活力的在线娱乐平台，旨在为年轻人提供一个分享创意、追求兴趣、探索文化的社区空间。作为中国最大的弹幕视频网站，Bilibili融合了视频、动画、游戏、音乐、文学等多元元素，为用户打造了一个充满创新和活力的数字生态。",
            link: "https://www.bilibili.com/"
        },
        // 可以添加更多工具内容对象
    ],
    media: [
        {
            title: "1-1 kali电子书",
            link:"视频/Kali渗透测试技术实战.pdf",
            description: "一本书,需打印"
        },
        {
            title: "音乐1",
            description: "这是音乐1的介绍。"
        }
        // 可以添加更多媒体内容对象
    ],
    thanks: [
        {
            description: "thanks for open ai"
        },
        {
            description: "thanks for github"
        }
        // 可以添加更多鸣谢内容对象
    ]
};

export default contentData;
