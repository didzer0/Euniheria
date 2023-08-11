// file: race_beast.js
GameSituations.race_beast = new undum.SimpleSituation(
        "<h1 class='transient'>兽耳种列表</h1>\
        <p class='transient'>兽耳族以身体外观有着兽类的特征而闻名，其习性也大多与自身的动物有许多相似之处。</p>\
        <p class='transient'><a href='beast_subrace1'>猫族</a>：作为欧尼希瑞亚大陆的本土居民，你拥有猫耳、兽瞳和猫尾，因此具备卓越的听力、平衡性和夜视能力。然而，你的耳朵和尾巴极其敏感，且在每年春天，你会进入发情期，需要做好适当的防护措施。</p>\
        <p class='transient'><a href='beast_subrace2'>犬族</a>：身为欧尼希瑞亚大陆的本土居民，你具备犬耳、兽瞳和犬尾，因此享有超群的听力、嗅觉，以及优秀的爆发力与奔跑速度。不过，你的耳朵和尾巴十分敏感，且在每年春天，你将会进入发情期，需要进行适时的防护措施。</p>\
        <p class='transient'><a href='beast_subrace3'>狼人族</a>：你属于欧尼希瑞亚大陆的狼人族，拥有狼耳、狼瞳和狼尾，因此具备卓越的听力、嗅觉和爆发力，但耳朵和尾巴极其敏感。身为高傲的兽耳族之首，你性格孤傲疏离，不愿成为他人附庸，但对实力超过自己的个体会心甘情愿地臣服。</p>\
        <p class='transient'><a href='beast_subrace4'>狐族</a>：你是来自遥远东方的神秘狐族，拥有狐耳、兽瞳和一至九条狐尾，享有超凡的听力、嗅觉、爆发力和智力，但耳朵和尾巴敏感，一旦抚摸就会发情。你的身体散发诱人香气，吸引着周围的生物，且只有当你遇到真爱时，你的发情期将会开始，持续至孕期。</p>\
        <p class='transient'><a href='beast_subrace5'>兔耳族</a>：身为欧尼希瑞亚大陆的兔耳族，你拥有兔耳、兔尾以及丰满的臀部和修长的双腿，因此具有超凡的弹跳能力，但臀部十分敏感，一旦被抚摸就会发情。你的发情期贯穿全年，强度虽不剧烈，但持续且足以让你需要做好相应的准备和处理。</p>\
        <p class='transient'><a href='beast_subrace6'>奶牛族</a>：你是欧尼希瑞亚大陆的奶牛族，具有牛耳、牛尾和丰满的胸部，这使得你的平衡性和奔跑能力略弱，但耐力出类拔萃。你的胸部极其敏感，一旦被抚摸就会发情。你热爱和平，身体的牛奶具有强大的治愈效果，广受冒险团队欢迎。</p>\
        <p class='transient'>返回<a href='race_hub'>种族列表</a></p>",
        {
        tags: ["race_choice"],
        optionText: "兽耳种",
        displayOrder: 1
    });
GameSituations.beast_subrace1 = new undum.SimpleSituation(
        "<h1 class='race_description'>猫族</h1>\
        <p class='race_description'>猫族注意事项——</p>\
        <p class='race_description'>一：你的性格将会出现不可逆的变化，包括但不限于渴望戴上项圈、希望能拥有一名主人、希望能被人当做宠物等，在没有主人的情况下，你会时常感到寂寞。此外，你的性格在极度黏人的情况下，会呈现出温柔与傲娇两个极端，可能会有所不适，请给予谅解。</p>\
        <p class='race_description'>二：你的舌头会有些微的倒刺，这并不会让人感到疼痛，相反会给被口交者带来极大的成瘾的快感。因此，如果不想被一天八小时口爆，请尽量避免给人口交。</p>\
        <p class='race_description'>三：你的舌头对热量十分敏感，超过四十度的温度会导致微痛与快感，在吞食食物与魔物精液时请额外注意。</p>\
        <p class='race_description'>四：你对猫薄荷的气味十分敏感，当闻到它的味道时，你的大脑会急速分泌快乐物质（多巴胺等），让你陷入一种柔和绵长的高潮中，你将逐渐失去自控能力，甚至丧失此段时间的记忆。因此，请格外注意这种味道，及时屏息，以免被奴隶商人捉走。</p>\
        <p class='race_description'>职业特长：刺客（又使之尾）。</p>\
        <p class='transient'><a href='./confirm-race' class='action'>确认种族</a></p>\
        <p class='transient'>返回<a href='./return-subrace'>兽耳种列表</a></p>\
        <p class='transient'>返回<a href='./return-race'>种族列表</a></p>",
        {
            tags: ["subrace_choice"],
            optionText: "猫族",
            actions: {
                "confirm-race": function(character, system, action) {
                    $('.race_description').removeClass('transient');
                    system.doLink('class_hub');
                },
                "return-subrace": function(character, system, action) {
                    $('.race_description').addClass('transient');
                    system.doLink('race_beast');
                },
                "return-race": function(character, system, action) {
                    $('.race_description').addClass('transient');
                    system.doLink('race_hub');
                }
            }
        });
GameSituations.beast_subrace2 = new undum.SimpleSituation(
        "<h1 class='transient'>犬族</h1>\
        <p class='transient'>犬族注意事项——</p>\
        <p class='transient'>一：你的性格将会出现不可逆的变化，包括但不限于渴望戴上项圈、希望能拥有一名主人、希望能被人当做宠物等，在没有主人的情况下，你会时常感到寂寞。此外，不论你是否拥有主人，你都会对人族保持最高的善意，同时会对人族的命令有极高的服从欲，可能会有所不适，请予以谅解。</p>\
        <p class='transient'>二：你的尿道将最多只有四厘米长，当看到树干、墙角等地方时，会产生强烈的尿意，如果强行忍耐，会导致发情与漏尿，如果不是喜欢此类play，建议穿短裙真空出门。</p>\
        <p class='transient'>三：你的嗅觉会十分灵敏，对于各类气味分辨非常清晰，但同时，挥发性媚药对你的催情效果提升200%，闻人类的精液超过半分钟，也有可能导致发情。</p>\
        <p class='transient'>四：你的舌头变得非常敏感，你拥有了分辨多种味道的能力，阴茎与舌头摩擦的快感会导致高潮，同时你容易将精液认作是最美味的食物，建议不要轻易尝试精液的味道，否则从今以后你只能吃精液拌饭了。</p>\
        <p class='transient'>职业特长：骑士（忠云之牙）。</p>\
        <p class='transient'><a href='./confirm-race' class='action'>确认种族</a></p>\
        <p class='transient'>返回<a href='./return-subrace'>兽耳种列表</a></p>\
        <p class='transient'>返回<a href='./return-race'>种族列表</a></p>",
        {
        tags: ["subrace_choice"],
        optionText: "犬族",
        actions: {
            "confirm-race": function(character, system, action) {
                $('.race_description').removeClass('transient');
                system.doLink('class_hub');
            },
            "return-subrace": function(character, system, action) {
                $('.race_description').addClass('transient');
                system.doLink('race_beast');
            },
            "return-race": function(character, system, action) {
                $('.race_description').addClass('transient');
                system.doLink('race_hub');
            }
        }
    }); 
GameSituations.beast_subrace3 = new undum.SimpleSituation(
        "<h1 class='transient'>狼人族</h1>\
        <p class='transient'>狼人族注意事项——</p>\
        <p class='transient'>一：你的性格将会出现不可逆的变化，包括但不限于高傲冷漠、对所有生物持审判眼光、喜欢和血族拌嘴、拒绝臣服等，但是当被对手打败时，无论是什么要求，你都会同意。此外，你的性格会变得认真教条、容易钻死理，可能会有所不适，请予以谅解。</p>\
        <p class='transient'>二：你的性格十分认真，对待每一件事都要求完美，狼人族赋予你的冷静与智慧足以支撑起你对战局的掌控，但是，当事情超出了你的认知或是预料时，你就会陷入混乱的羞耻，发出可爱的悲鸣。</p>\
        <p class='transient'>三：狼人族是高傲的种族，你拒绝随意的臣服，但是，当强者要求你服从时，你必须按照祖先的传统，换上哥特风格的女仆装，用一顶小礼帽遮住自己的左耳，以此侍奉主人。这是臣服的证明，向所有人证明你已经是一个人的专属女仆或肉便器了。所以，当你拿下礼帽时，你必须承受足以让你发疯的羞耻，因为你的左耳，在你的心目中已经等同于下体。在臣服后，除非是羞耻play，请勿尝试于大庭广众下摘下礼帽，你不会喜欢在战斗中因为视奸而高潮的感觉。</p>\
        <p class='transient'>四：狼人族是高傲而认真的种族，你的自尊不允许你在性爱中处于弱势地位，所以，无论你有多么羞耻，都会努力装出强气的样子要求女上位并自己动。但是，请注意狼人族的膣腔里，性感带位置分布位置并不适合女上位，绝大部分狼人少女在坐在别人身上自己动两三下就会潮吹，甚至是数小时的失神与性格崩坏。目前记录中，最强大的狼人族少女可以在男人身上撑到第十五秒才高潮。如果一定要维持尊严，而不愿意在床上当一只软萌的小狼，请量力而行。</p>\
        <p class='transient'>五：友情提醒，狼人族有着祖传的死鸭子嘴犟的坏毛病，请注意在必要时，抛弃尊严，说一点实话，避免事情往你所不愿看到的方向发展（目前已知的最多情况，就是坚持自己没有高潮，最终脱水送医）。</p>\
        <p class='transient'>职业特长：格斗家（永夜之月）。</p>\
        <p class='transient'><a href='./confirm-race' class='action'>确认种族</a></p>\
        <p class='transient'>返回<a href='./return-subrace'>兽耳种列表</a></p>\
        <p class='transient'>返回<a href='./return-race'>种族列表</a></p>",
        {
        tags: ["subrace_choice"],
        optionText: "狼族",
        actions: {
            "confirm-race": function(character, system, action) {
                $('.race_description').removeClass('transient');
                system.doLink('class_hub');
            },
            "return-subrace": function(character, system, action) {
                $('.race_description').addClass('transient');
                system.doLink('race_beast');
            },
            "return-race": function(character, system, action) {
                $('.race_description').addClass('transient');
                system.doLink('race_hub');
            }
        }
    });
GameSituations.beast_subrace4 = new undum.SimpleSituation(
        "<h1 class='transient'>狐族</h1>\
        <p class='transient'>狐族注意事项——</p>\
        <p class='transient'>一：你的性格将会出现不可逆的变化，包括但不限于喜欢赖在爱人的怀中、和爱人对话时语气不自觉地变得撒娇、不论干什么事情都会想着爱人、会偷偷地看着爱人的脸发呆和傻笑等，你会不自觉地按照对方的口味去做饭，帮他/她处理好一切力所能及的事情，致力于将他/她养成一个“废人”。此外，你的性格会变的天真烂漫，对一切都聪明伶俐，唯独在爱人面前会少一根筋，同时非常容易害羞，可能会有所不适，请予以谅解。</p>\
        <p class='transient'>二：在遇见“真命天子”后，只要被对方触碰，就会陷入羞耻的发情状态，接触时间超过30秒则会高潮，这种情况在怀孕期间与产后半年内不会出现，其余时间都会一直存在。如果不想被爱人蹭一下就两腿淌得全是爱液、瘫软在地，就竭力为对方生一堆可爱的小宝宝吧。</p>\
        <p class='transient'>三：狐族的产子是不会产生痛苦的，相反会陷入一种持续的高潮状态，虽然案例极少，但还是有因为高潮太过激烈而出现难产的现象，平日请多进行高潮忍耐训练，生产时，如若必要，请进行剖腹产。</p>\
        <p class='transient'>职业特长：武士（恋色苍穹）。</p>\
        <p class='transient'><a href='./confirm-race' class='action'>确认种族</a></p>\
        <p class='transient'>返回<a href='./return-subrace'>兽耳种列表</a></p>\
        <p class='transient'>返回<a href='./return-race'>种族列表</a></p>",
        {
        tags: ["subrace_choice"],
        optionText: "狐族",
        actions: {
            "confirm-race": function(character, system, action) {
                $('.race_description').removeClass('transient');
                system.doLink('class_hub');
            },
            "return-subrace": function(character, system, action) {
                $('.race_description').addClass('transient');
                system.doLink('race_beast');
            },
            "return-race": function(character, system, action) {
                $('.race_description').addClass('transient');
                system.doLink('race_hub');
            }
        }
    });
GameSituations.beast_subrace5 = new undum.SimpleSituation(
        "<h1 class='transient'>兔耳族</h1>\
        <p class='transient'>兔耳族注意事项——</p>\
        <p class='transient'>一：你的性格将会出现不可逆的变化，包括但不限于性情温顺、喜好棒状物、非常容易害羞、忠于“前辈”等，你渴望得到足够的关注，但却又害怕成为焦点，渴望做爱，但却羞于让任何人知晓，可能有所不适，请予以谅解。</p>\
        <p class='transient'>二：绝大部分的兔耳族都是在娱乐会所工作，你也是如此，你天生拥有较强的魔力亲和力，可以轻松掌握部分戏法（0级法术），因此，你可以穿上高叉的兔女郎服装与黑色丝袜，通过表演轻松赚取金币。</p>\
        <p class='transient'>三：兔耳族的正式服装名为“三月倾心”，因为每当你进入到每年的三月份时，发情状态会突然变得强烈，你的神志虽然无比的清晰，但由于发情导致了过度的亢奋，所以会在性方面做出非常多出格的事情。因此，在三月，你要换上华丽可爱的洛丽塔风格的“三月倾心”，表示现在你就是个“疯子”，然后尽情放飞自我吧，等到你冷静下来的时候，会发觉自己正躺在爱人的怀里抚摸着微微隆起的小腹，享受幸福。</p>\
        <p class='transient'>四：你的臀部无比的敏感，虽然平时坐着的时候并不会有大碍，但是穿三角内裤会有所不适，因此，购买内衣时，请注意选择包臀款或是丁字裤，当然，也可以像大部分兔耳族一样，选择真空。</p>\
        <p class='transient'>职业特长：术士（恋法宣告使）、巫师（三月童话）。</p>\
        <p class='transient'><a href='./confirm-race' class='action'>确认种族</a></p>\
        <p class='transient'>返回<a href='./return-subrace'>兽耳种列表</a></p>\
        <p class='transient'>返回<a href='./return-race'>种族列表</a></p>",
        {
        tags: ["subrace_choice"],
        optionText: "兔耳族",
        actions: {
            "confirm-race": function(character, system, action) {
                $('.race_description').removeClass('transient');
                system.doLink('class_hub');
            },
            "return-subrace": function(character, system, action) {
                $('.race_description').addClass('transient');
                system.doLink('race_beast');
            },
            "return-race": function(character, system, action) {
                $('.race_description').addClass('transient');
                system.doLink('race_hub');
            }
        }
    });
GameSituations.beast_subrace6 = new undum.SimpleSituation(
        "<h1 class='transient'>奶牛族</h1>\
        <p class='transient'>奶牛族注意事项——</p>\
        <p class='transient'>一：你的性格将会出现不可逆的变化，包括但不限于语调软糯、面对要求不好意思拒绝、发生争端时永远退让等，你喜欢世上除了魔物的每一个生命，不愿看到他们受伤，可能会有所不适，请予以谅解。</p>\
        <p class='transient'>二：你与圣光的相性极佳，这也意味着，在面对黑暗时会出现迷糊的症状，请避免在夜晚独自路过魔物的聚集地，以防被抓走作为产卵母体。</p>\
        <p class='transient'>三：你的胸部虽然可以储存大量的乳汁，但是每天生产的量也非常的大，请备好榨乳器，避免出现喷奶的意外。</p>\
        <p class='transient'>四：你的乳头极度敏感，虽然半数奶牛族少女都有乳头陷没的情况，但是涨奶时还会勃起成小草莓的样子，请务必保证胸部的衣物足够柔软细腻贴身，因为普通的棉布摩擦就会让你一边疼得泣不成声，一边又高潮得死去活来。</p>\
        <p class='transient'>职业特长：召唤师（圣光之母）、牧师（哺春者）。</p>\
        <p class='transient'>返回<a href='race_beast'>兽耳种列表</a></p>\
        <p class='transient'>返回<a href='race_hub'>种族列表</a></p>",
        {
        tags: ["subrace_choice"],
        optionText: "奶牛族",
        actions: {
            "confirm-race": function(character, system, action) {
                $('.race_description').removeClass('transient');
                system.doLink('class_hub');
            },
            "return-subrace": function(character, system, action) {
                $('.race_description').addClass('transient');
                system.doLink('race_beast');
            },
            "return-race": function(character, system, action) {
                $('.race_description').addClass('transient');
                system.doLink('race_hub');
            }
        }
    });