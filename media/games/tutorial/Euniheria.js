// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------

/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "yinfeihong-wang-gmail-com";

/* A string indicating what version of the game this is. Versions are
 * used to control saved-games. If you change the content of a game,
 * the saved games are unlikely to work. Changing this version number
 * prevents Undum from trying to load the saved-game and crashing. */
undum.game.version = "1.0";

/* A variable that changes the fade out speed of the option text on
 * a mobile. */
undum.game.mobileHide = 2000

/* A variable that changes the options fade out speed. */
undum.game.fadeSpeed = 1500

/* A variable that changes the slide up speed after clicking on an
 * option. */
undum.game.slideUpSpeed = 500

/* The situations that the game can be in. Each has a unique ID. */
undum.game.situations = {
    start: new undum.SimpleSituation(
        "<h1>欢迎来到欧尼希瑞亚</h1>\
        <img src='media/games/tutorial/woodcut1.png' class='float_right'>\
        <p>欢迎来到欧尼希瑞亚. 希望你已经准备好成为欧尼希瑞亚大陆\
        的一名冒险者了.这部分游戏将作为你的角色创建引导，众所周知\
        本世界目前仅支持创建女性角色，请谨慎选择您的角色，随后将\
        无法再做更改。</p>\
        \
        <p>接下来，你将选择你的种族，职业，以及外貌。</p>\
        \
        <p class='transient'>点击<a href='hub'>这里</a>继续。。。</p>"
    ),

    // NB: The 'hub' situation which is the main list of topics, is
    // defined wholly in the HTML file, and doesn't have an entry in
    // the game.situations dictionary in this file.

    // For variety, here we define a situation using the top-level
    // Situation type. This is a neat approach to generate text by
    // looking it up in the HTML document. For static text that makes
    // more sense than writing it longhand.

    situations: new undum.Situation({
        enter: function(character, system, from) {
            system.write($("#s_situations").html());
        },
        tags: ["topic"],
        optionText: "What Undum Games are Made Of",
        displayOrder: 1
    }),
    todo: new undum.SimpleSituation(
        "<p>Two things can happen in a situation. The character either\
        <a href='links'>leaves</a> the situation and enters another one, or\
        they carry out some <a href='./do-something'>action</a>. Actions may\
        perform some processing, they may display some results, but\
        ultimately they put the character back into the same situation\
        again.</p>\
        \
        <p>When you are designing your game, use situations to reflect a\
        change in what the character can do. So you would change situation if\
        the character pulls a lever to open a trapdoor, for example. Actions\
        are intended for situations where the character can examine things\
        more closely, or maybe top up their magic by drinking a potion.\
        Things that don't affect the state of the world around them.</p>\
        \
        <p>Situations generate content when they are <em>enter</em>ed,\
        <em>exit</em>ed, and when they receive an <em>act</em>ion (the\
        italicised words are the names of the three methods that do this).\
        You can write code to generate content in any way you like, so the\
        content that is displayed can be totally dynamic: taking into\
        account the current state of the character.\
        Content is just plain HTML, so you use regular HTML tags to make\
        things <strong>bold</strong> or <em>italic</em>, or to include\
        images. This gives you a lot of flexibility. For example, since Undum\
        targets HTML5 browsers, you could use the <em>audio</em> or\
        <em>video</em> tags to include rich media.</p>\
        \
        <p class='transient'>Make sure you've carried out the action above,\
        then <a href='race_hub'>return to the topic list</a>.</p>",
        {
            actions: {
                'do-something': "<p>You carried out the action, well done.\
                                 You'll notice that the links for this\
                                 situation are still active. This means you\
                                 can click to perform the action again.</p>"
            }
        }
    ),
    links: new undum.SimpleSituation(
        "<p>Between each chunk of new text, Undum inserts a discreet line\
        in the margin. This allows you to see at a glance everything that\
        has been output as a result of your last click.\
        It is particularly useful for small devices, or when\
        lots of content has appeared. The window also scrolls so the start\
        of the new content is as near to the top of the window as possible.\
        This is also designed to help you read more naturally.</p>\
        \
        <p>If you've been watching carefully, you will have noticed that\
        parts of the text have been disappearing when you move between\
        situations. This isn't a bug! One of the aims of Undum is to give\
        game designers the ability to make the transcript of\
        the game read as a coherent piece of narrative. However, you often\
        need chunks of text that do nothing but offer the reader choices.\
        Undum defines a special CSS class to add to your HTML for this\
        (remember generated content is just HTML). It is <em>transient</em>,\
        and can be applied to paragraphs, <em>div</em>s, or just\
        <em>span</em>s<span class='transient'> (such as this one)</span>.</p>\
        \
        <p>You may also have noticed that, when you move situations, all the\
        links in the previous situation turn into regular text. This is to\
        stop you backtracking and trying previous options when you've already\
        committed to one. In other H-IF systems, this is\
        done by completely removing the content from previous pages.\
        That prevents you going back and reading your story, however.</p>\
        \
        <p class='transient'>The 'Different Kinds of Links' topic has more\
        about these links.\
        Let's return to the <a href='hub'>topic list</a>.</p>",
        {
            heading: "Disappearing Content",
            diplayOrder: 2,
            tags: ["topic"]
        }
    ),
    sticky: new undum.SimpleSituation(
        "<p>There are three types of link in Undum. The first two we've seen\
        in previous topics:\
        links to change situation and links to carry out an action. When you\
        include a link in your output, Undum parses it and wires it up\
        correctly. If you create a link with a HTML <em>href</em> attribute\
        containing just a name ('ballroom', for\
        example) this will send the character to the situation with that\
        name. Links\
        with two components ('ballroom/view-painting', for example) send\
        the character to a new situation <em>and then</em> carry out the\
        named action ('view-painting' in this case). To carry out an action\
        in the current situation, you can replace the situation name with a\
        dot (so it would be './view-painting'). In all cases, if the\
        character is already in that situation, then the situation's\
        <em>enter</em> method won't be called again.</p>\
        \
        <img src='media/games/tutorial/woodcut2.png' class='float_left'>\
        <p>The third type of link, then, is a general hyperlink. If your\
        link doesn't consist of a single element or pair of elements, as\
        above, then Undum will guess that you have a normal hyperlink. As\
        <a href='http://news.bbc.co.uk' class='sticky'>in this link</a>.\
        If you have a link that <em>does</em> look like an Undum link, you\
        can still force Undum not to interpret it as an action or situation\
        move, by adding the CSS class <em>raw</em> to the HTML <em>a</em> tag.\
        links that don't have the <em>raw</em> class, but that are considered\
        to be non-Undum links (like the link above), will have <em>raw</em>\
        added to them before display. This could allow you to style external\
        links differently, as we have done here.</p>\
        \
        <p>In the last situation I said you can prevent links from being\
        turned into regular text when you move situations. This is done\
        by another CSS class: <em>sticky</em>. When you\
        <a href='oneshot'>leave this situation</a>, you'll notice the\
        external link stays active. This can allow you to have options that\
        stay valid throughout the narrative, for example, such as a spell to\
        teleport home.</p>",
        {
            tags: ["topic"],
            displayOrder: 3,
            heading: "Different Kinds of Links"
        }
    ),
    oneshot: new undum.SimpleSituation(
        "<p>There is one final option for links. If you give a link\
        the <em>once</em> CSS class, then that link will disappear\
        after it is clicked. This is  used (as in\
        <a href='./one-time-action' class='once'>this link</a>) for\
        actions that you only want to be possible once. There is no\
        point using 'once' on situation links because they'll be turned\
        into text as soon as you click them anyway (unless they are also\
        <em>sticky</em>, of course).</p><p>Once links are useful\
        for actions such as examining an object more carefully. You\
        don't want lots of repeated descriptions, so making the link\
        a <em>once</em> link is more user friendly.</p>\
        <p>If you have more than one link to the same action, then all\
        matching links will be removed, so you don't have to worry about\
        the player having an alternative way to carry out the action.</p>\
        <p class='transient'>After you've clicked the link, let's\
        <a href='hub'>move on</a>.</p>",
        {
            actions: {
                "one-time-action": "<p>As I said, one time actions are\
                                   mostly used to describe something in\
                                   more detail, where you don't want the\
                                   same descriptive text repeated over and\
                                   over</p>"
            }
        }
    ),
    qualities: new undum.SimpleSituation(
        "<p>Let's talk about the character.\
        The character is described by a series of <em>qualities</em>. These\
        are numeric values that can describe anything from natural abilities\
        to how much of a resource the character controls. Qualities are\
        shown in the box on the right of the text.</p>\
        \
        <p>The qualities there are those you started the game with. When you\
        <a href='quality-types'>go to the next situation</a>, keep your\
        eyes on the character panel. You'll notice I'll give you a boost to\
        your stamina quality. This process is animated and highlighted to\
        draw your attention to it. You could also get a boost of skill\
        by carrying out <a href='./skill-boost'>this action</a> as many\
        times as you like.</p>",
        {
            heading: "Qualities and the Character",
            tags: ["topic"],
            displayOrder: 4,
            actions: {
                "skill-boost": function(character, system, action) {
                    system.setQuality("skill", character.qualities.skill+1);
                }
            },
            exit: function(character, system, to) {
                system.setQuality("stamina", character.qualities.stamina+1);
            }
        }
    ),
    "quality-types": new undum.SimpleSituation(
        "<p>Not all the qualities in the character panel are displayed as\
        numeric. Internally they are all numeric, but different qualities\
        get to choose how to display themselves. So 'Luck', for example, is\
        displayed as words (based on the FUDGE RPG's adjective scale),\
        and 'Novice' is using just a check-mark.</p>\
        \
        <p>To see how Luck changes, try using this\
        <a href='./luck-boost'>luck-boosting action</a> or this\
        <a href='./luck-reduce'>luck-reducing action</a>. Notice that\
        luck uses a numeric bonus when it runs out of words. There are a range\
        of different display types provided with Undum, and you can easily\
        add your own too.</p>\
        \
        <p>When you <a href='character-text'>leave this situation</a>,\
        I'll set 'Novice' to zero. Watch\
        the character panel, and you'll see that Novice decides it doesn't\
        need to be displayed any more and will be removed. You will also see\
        that when the last\
        quality in a group is removed ('Novice' is in the 'Progress' group),\
        then the group heading is also removed. You can tell Undum what\
        group each quality belongs to, and what order they should be listed.\
        <p>",
        {
            actions: {
                "luck-boost": function(character, system, action) {
                    system.setQuality("luck", character.qualities.luck+1);
                },
                "luck-reduce": function(character, system, action) {
                    system.setQuality("luck", character.qualities.luck-1);
                }
            },
            exit: function(character, system, to) {
                system.setQuality("novice", 0);
            }
        }
    ),
    "character-text": new undum.SimpleSituation(
        "<h1>Character Text</h1>\
        <p>Above the list of qualities is a short piece of text, called\
        the character-text. This describes the character in some way. It\
        can be set by any action or when entering or leaving a situation.\
        It is just regular HTML content, as for all text in Undum. It can\
        also contain Undum links, so this is another place you can put\
        actions that the character can carry out over a long period of time.\
        </p>\
        <p class='transient'>Let's go back to the\
        <a href='hub'>topic list</a>. As you do, I'll change the\
        character text. Notice that it is highlighted, just the same as\
        when a quality is altered.</p>",
        {
            exit: function(character, system, to) {
                system.setCharacterText(
                    "<p>We're nearing the end of the road.</p>"
                );
            }
        }
    ),
    progress: new undum.SimpleSituation(
        "<p>Sometimes you want to make the change in a quality into a more\
        significant event. You can do this by animating the change in\
        quality. If you <a href='./boost-stamina-action'>boost your\
        stamina</a>, you will see the stamina change in the normal\
        way in the character panel. But you will also see a progress\
        bar appear and animate below.</p>",
        {
            tags: ["topic"],
            heading: "Showing a Progress Bar",
            displayOrder: 5,
            actions: {
                // I'm going indirect here - the link carries out an
                // action, which then uses doLink to directly change
                // the situation.  This isn't the recommended way (I
                // could have just changed situation in the link), but
                // it illustrates the use of doLink.
                "boost-stamina-action": function(character, system, action) {
                    system.doLink("boost-stamina");
                }
            },
            exit: function(character, system, to) {
                system.animateQuality(
                    'stamina', character.qualities.stamina+1
                );
            }
        }
    ),
    "boost-stamina": new undum.SimpleSituation(
        "<p>\
        <img src='media/games/tutorial/woodcut3.png' class='float_right'>\
        The progress bar is also useful in situations where the\
        character block is displaying just the whole number of a quality,\
        whereas some action changes a fraction. If the quality is displaying\
        the character's level, for example, you might want to show a progress\
        bar to indicate how near the character is to levelling up.</p>\
        \
        <p>After a few seconds, the progress bar disappears, to keep the\
        focus on the text. Undum isn't designed for games where a lot of\
        statistic management is needed. If you want a change to be part\
        of the permanent record of the game, then write it in text.</p>\
        \
        <p>Let's <a href='hub'>return to the topic list.</a></p>"
        ),
    // Again, we'll retrieve the text we want from the HTML file.
    "saving": new undum.Situation({
        enter: function(character, system, from) {
            system.write($("#s_saving").html());
        },
        tags: ["topic"],
        displayOrder: 6,
        optionText: "Saving and Loading"
    }),

    "implicit-boost": new undum.SimpleSituation(
        "<p>Your luck has been boosted<span class='transient'>, check the\
        list of options to see if they have changed</span>.</p>",
        {
            tags: ["example"],
            enter: function(character, system, from) {
                system.animateQuality("luck", character.qualities.luck+1)
                system.doLink('example-choices');
            },
            optionText: "Boost Your Luck",
            displayOrder: 1,
            canView: function(character, system, host) {
                return character.qualities.luck < 4;
            }
        }
    ),
    "implicit-drop": new undum.SimpleSituation(
        "<p>Your luck has been reduced<span class='transient'>, check the\
        list of options to see if they have changed</span>.</p>",
        {
            tags: ["example"],
            enter: function(character, system, from) {
                system.animateQuality("luck", character.qualities.luck-1)
                system.doLink('example-choices');
            },
            optionText: "Reduce Your Luck",
            displayOrder: 2,
            canView: function(character, system, host) {
                return character.qualities.luck > -4;
            }
        }
    ),
    "high-luck-only": new undum.SimpleSituation(
        "<p>Your luck is higher than 'fair'. The link to this \
        situation would not\
        have appeared if it were lower.</p>",
        {
            tags: ["example"],
            enter: function(character, system, from) {
                system.doLink('example-choices');
            },
            optionText: "High Luck Option",
            displayOrder: 3,
            canView: function(character, system, host) {
                return character.qualities.luck > 0;
            }
        }
    ),
    "low-luck-only": new undum.SimpleSituation(
        "<p>Your luck is lower than 'fair'. The link to this situation \
        appears whether\
        it is low or high, but can only be chosen if it is low. It does this\
        by defining a <em>canChoose</em> method.</p>",
        {
            tags: ["example"],
            enter: function(character, system, from) {
                system.doLink('example-choices');
            },
            optionText: "Low Luck Option (requires low luck to be clickable)",
            displayOrder: 3,
            canChoose: function(character, system, host) {
                return character.qualities.luck < 0;
            }
        }
    ),

    "last": new undum.SimpleSituation(
        "<h1>Where to Go Now</h1>\
        <p>So that's it. We've covered all of Undum. This situation is the\
        end, because it has no further links. The 'The End' message is\
        just in the HTML output of this situation, it isn't anything special\
        to Undum</p>\
        \
        <p>I've added an\
        inspiration quality to your character list. Its time for you to\
        crack open the game file and write your own story.</p>\
        <h1>The End</h1>",
        {
            tags: ["topic"],
            optionText: "Finish the Tutorial",
            displayOrder: 8,
            enter: function(character, system, from) {
                system.setQuality("inspiration", 1);
                system.setCharacterText(
                    "<p>You feel all inspired, why not have a go?</p>"
                );
            }
        }
    ),
};

undum.game.actions.confirmRace = function(character, system, action) {
    if (system.situation.id === 'race_hub') {
        // Hide the content by adding the 'transient' class
        $('#race_description').addClass('transient');
    } else {
        // Show the content by removing the 'transient' class
        $('#race_description').removeClass('transient');
    }
};

undum.game.situations = {
    start: new undum.SimpleSituation(
        "<h1>欢迎来到欧尼希瑞亚</h1>\
        <img src='media/games/tutorial/woodcut1.png' class='float_right'>\
        <p>欢迎来到欧尼希瑞亚. 希望你已经准备好成为欧尼希瑞亚大陆\
        的一名冒险者了.这部分游戏将作为你的角色创建引导，众所周知\
        本世界目前仅支持创建女性角色，请谨慎选择您的角色，随后将\
        无法再做更改。</p>\
        \
        <p>接下来，你将选择你的种族，职业，以及外貌。</p>\
        \
        <p class='transient'>点击<a href='race_hub'>这里</a>继续。。。</p>"
    ),

//兽耳种分割线

    "race_beast": new undum.SimpleSituation(
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
    }),
    "beast_subrace1": new undum.SimpleSituation(
        "<h1 class='transient'>猫族</h1>\
        <p class='transient'>猫族注意事项——</p>\
        <p class='transient'>一：你的性格将会出现不可逆的变化，包括但不限于渴望戴上项圈、希望能拥有一名主人、希望能被人当做宠物等，在没有主人的情况下，你会时常感到寂寞。此外，你的性格在极度黏人的情况下，会呈现出温柔与傲娇两个极端，可能会有所不适，请给予谅解。</p>\
        <p class='transient'>二：你的舌头会有些微的倒刺，这并不会让人感到疼痛，相反会给被口交者带来极大的成瘾的快感。因此，如果不想被一天八小时口爆，请尽量避免给人口交。</p>\
        <p class='transient'>三：你的舌头对热量十分敏感，超过四十度的温度会导致微痛与快感，在吞食食物与魔物精液时请额外注意。</p>\
        <p class='transient'>四：你对猫薄荷的气味十分敏感，当闻到它的味道时，你的大脑会急速分泌快乐物质（多巴胺等），让你陷入一种柔和绵长的高潮中，你将逐渐失去自控能力，甚至丧失此段时间的记忆。因此，请格外注意这种味道，及时屏息，以免被奴隶商人捉走。</p>\
        <p class='transient'>职业特长：刺客（又使之尾）。</p>\
        <p class='transient'><a href='./confirmRace' class='action'>确认种族</a></p>\
        <p class='transient'>返回<a href='race_beast'>兽耳种列表</a></p>\
        <p class='transient'>返回<a href='race_hub'>种族列表</a></p>",
        {
        tags: ["subrace_choice"],
        optionText: "猫族",
        displayOrder: 1
    }),    
    "beast_subrace2": new undum.SimpleSituation(
        "<h1 class='transient'>犬族</h1>\
        <p class='transient'>犬族注意事项——</p>\
        <p class='transient'>一：你的性格将会出现不可逆的变化，包括但不限于渴望戴上项圈、希望能拥有一名主人、希望能被人当做宠物等，在没有主人的情况下，你会时常感到寂寞。此外，不论你是否拥有主人，你都会对人族保持最高的善意，同时会对人族的命令有极高的服从欲，可能会有所不适，请予以谅解。</p>\
        <p class='transient'>二：你的尿道将最多只有四厘米长，当看到树干、墙角等地方时，会产生强烈的尿意，如果强行忍耐，会导致发情与漏尿，如果不是喜欢此类play，建议穿短裙真空出门。</p>\
        <p class='transient'>三：你的嗅觉会十分灵敏，对于各类气味分辨非常清晰，但同时，挥发性媚药对你的催情效果提升200%，闻人类的精液超过半分钟，也有可能导致发情。</p>\
        <p class='transient'>四：你的舌头变得非常敏感，你拥有了分辨多种味道的能力，阴茎与舌头摩擦的快感会导致高潮，同时你容易将精液认作是最美味的食物，建议不要轻易尝试精液的味道，否则从今以后你只能吃精液拌饭了。</p>\
        <p class='transient'>职业特长：骑士（忠云之牙）。</p>\
        <p class='transient'>返回<a href='race_beast'>兽耳种列表</a></p>\
        <p class='transient'>返回<a href='race_hub'>种族列表</a></p>",
        {
        tags: ["subrace_choice"],
        optionText: "犬族",
        displayOrder: 1
    }),    
    "beast_subrace3": new undum.SimpleSituation(
        "<h1 class='transient'>狼人族</h1>\
        <p class='transient'>狼人族注意事项——</p>\
        <p class='transient'>一：你的性格将会出现不可逆的变化，包括但不限于高傲冷漠、对所有生物持审判眼光、喜欢和血族拌嘴、拒绝臣服等，但是当被对手打败时，无论是什么要求，你都会同意。此外，你的性格会变得认真教条、容易钻死理，可能会有所不适，请予以谅解。</p>\
        <p class='transient'>二：你的性格十分认真，对待每一件事都要求完美，狼人族赋予你的冷静与智慧足以支撑起你对战局的掌控，但是，当事情超出了你的认知或是预料时，你就会陷入混乱的羞耻，发出可爱的悲鸣。</p>\
        <p class='transient'>三：狼人族是高傲的种族，你拒绝随意的臣服，但是，当强者要求你服从时，你必须按照祖先的传统，换上哥特风格的女仆装，用一顶小礼帽遮住自己的左耳，以此侍奉主人。这是臣服的证明，向所有人证明你已经是一个人的专属女仆或肉便器了。所以，当你拿下礼帽时，你必须承受足以让你发疯的羞耻，因为你的左耳，在你的心目中已经等同于下体。在臣服后，除非是羞耻play，请勿尝试于大庭广众下摘下礼帽，你不会喜欢在战斗中因为视奸而高潮的感觉。</p>\
        <p class='transient'>四：狼人族是高傲而认真的种族，你的自尊不允许你在性爱中处于弱势地位，所以，无论你有多么羞耻，都会努力装出强气的样子要求女上位并自己动。但是，请注意狼人族的膣腔里，性感带位置分布位置并不适合女上位，绝大部分狼人少女在坐在别人身上自己动两三下就会潮吹，甚至是数小时的失神与性格崩坏。目前记录中，最强大的狼人族少女可以在男人身上撑到第十五秒才高潮。如果一定要维持尊严，而不愿意在床上当一只软萌的小狼，请量力而行。</p>\
        <p class='transient'>五：友情提醒，狼人族有着祖传的死鸭子嘴犟的坏毛病，请注意在必要时，抛弃尊严，说一点实话，避免事情往你所不愿看到的方向发展（目前已知的最多情况，就是坚持自己没有高潮，最终脱水送医）。</p>\
        <p class='transient'>职业特长：格斗家（永夜之月）。</p>\
        <p class='transient'>返回<a href='race_beast'>兽耳种列表</a></p>\
        <p class='transient'>返回<a href='race_hub'>种族列表</a></p>",
        {
        tags: ["subrace_choice"],
        optionText: "狼族",
        displayOrder: 1
    }),    
    "beast_subrace4": new undum.SimpleSituation(
        "<h1 class='transient'>狐族</h1>\
        <p class='transient'>狐族注意事项——</p>\
        <p class='transient'>一：你的性格将会出现不可逆的变化，包括但不限于喜欢赖在爱人的怀中、和爱人对话时语气不自觉地变得撒娇、不论干什么事情都会想着爱人、会偷偷地看着爱人的脸发呆和傻笑等，你会不自觉地按照对方的口味去做饭，帮他/她处理好一切力所能及的事情，致力于将他/她养成一个“废人”。此外，你的性格会变的天真烂漫，对一切都聪明伶俐，唯独在爱人面前会少一根筋，同时非常容易害羞，可能会有所不适，请予以谅解。</p>\
        <p class='transient'>二：在遇见“真命天子”后，只要被对方触碰，就会陷入羞耻的发情状态，接触时间超过30秒则会高潮，这种情况在怀孕期间与产后半年内不会出现，其余时间都会一直存在。如果不想被爱人蹭一下就两腿淌得全是爱液、瘫软在地，就竭力为对方生一堆可爱的小宝宝吧。</p>\
        <p class='transient'>三：狐族的产子是不会产生痛苦的，相反会陷入一种持续的高潮状态，虽然案例极少，但还是有因为高潮太过激烈而出现难产的现象，平日请多进行高潮忍耐训练，生产时，如若必要，请进行剖腹产。</p>\
        <p class='transient'>职业特长：武士（恋色苍穹）。</p>\
        <p class='transient'>返回<a href='race_beast'>兽耳种列表</a></p>\
        <p class='transient'>返回<a href='race_hub'>种族列表</a></p>",
        {
        tags: ["subrace_choice"],
        optionText: "狐族",
        displayOrder: 1
    }),
    "beast_subrace5": new undum.SimpleSituation(
        "<h1 class='transient'>兔耳族</h1>\
        <p class='transient'>兔耳族注意事项——</p>\
        <p class='transient'>一：你的性格将会出现不可逆的变化，包括但不限于性情温顺、喜好棒状物、非常容易害羞、忠于“前辈”等，你渴望得到足够的关注，但却又害怕成为焦点，渴望做爱，但却羞于让任何人知晓，可能有所不适，请予以谅解。</p>\
        <p class='transient'>二：绝大部分的兔耳族都是在娱乐会所工作，你也是如此，你天生拥有较强的魔力亲和力，可以轻松掌握部分戏法（0级法术），因此，你可以穿上高叉的兔女郎服装与黑色丝袜，通过表演轻松赚取金币。</p>\
        <p class='transient'>三：兔耳族的正式服装名为“三月倾心”，因为每当你进入到每年的三月份时，发情状态会突然变得强烈，你的神志虽然无比的清晰，但由于发情导致了过度的亢奋，所以会在性方面做出非常多出格的事情。因此，在三月，你要换上华丽可爱的洛丽塔风格的“三月倾心”，表示现在你就是个“疯子”，然后尽情放飞自我吧，等到你冷静下来的时候，会发觉自己正躺在爱人的怀里抚摸着微微隆起的小腹，享受幸福。</p>\
        <p class='transient'>四：你的臀部无比的敏感，虽然平时坐着的时候并不会有大碍，但是穿三角内裤会有所不适，因此，购买内衣时，请注意选择包臀款或是丁字裤，当然，也可以像大部分兔耳族一样，选择真空。</p>\
        <p class='transient'>职业特长：术士（恋法宣告使）、巫师（三月童话）。</p>\
        <p class='transient'>返回<a href='race_beast'>兽耳种列表</a></p>\
        <p class='transient'>返回<a href='race_hub'>种族列表</a></p>",
        {
        tags: ["subrace_choice"],
        optionText: "兔耳族",
        displayOrder: 1
    }),
    "beast_subrace6": new undum.SimpleSituation(
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
        displayOrder: 1
    }), 

//光种分割线

    "race_light": new undum.SimpleSituation(
        "<h1 class='transient'>光种列表</h1>\
        <p class='transient'>光种是收到造物主青睐物种，高贵优雅且强大。</p>\
        <p class='transient'><a href='light_subrace1'>精灵族</a>：你是欧尼希瑞亚大陆优雅悠久的精灵族，金发、尖耳和苗条的身材是你的特征。你具备出色的平衡性、奔跑能力和箭术，并能与自然生物交谈。虽然你的胸部相对小，但敏感度不亚于奶牛族。</p>\
        <p class='transient'><a href='light_subrace2'>龙族</a>：作为无铭岛的冒险者，你属于强大且悠久的龙族，拥有超凡力量和巨龙吐息。你的龙角、尾巴和翼非常敏感，触碰会触发发情状态，而龙角还是你魔力的汇聚之处，若受到外来魔力侵蚀可能导致多种异常状态。</p>\
        <p class='transient'><a href='light_subrace3'>造物</a>：你是星野与苍穹的居民，是“造物主”亲手创造的机械生命体，拥有完美的身材比例和五官，以及由“星辰机术”创造的不需呼吸、排泄的身体。你可以随意更换身体部件，但你的球形关节比较敏感，触碰可能会引发发情状态。</p>\
        <p class='transient'>点击<a href='race_hub'>这里</a>返回种族列表</p>",
        {
        tags: ["race_choice"],
        optionText: "光种",
        displayOrder: 2
    }),
    "light_subrace1": new undum.SimpleSituation(
        "<h1 class='transient'>精灵族</h1>\
        <p class='transient'>精灵族注意事项——</p>\
        <p class='transient'>一：你的性格将会出现不可逆的变化，包括但不限于极度傲娇、永远在口嫌体正直地帮助朋友、对自己的胸部大小十分在意等，你十分容易因为他人对你胸部的嘲笑而丧失理智，进而胡乱攻击他人，可能会有所不适，请予以谅解。</p>\
        <p class='transient'>二：你会十分讨厌穿内衣，不管是内裤还是胸罩，这会让你感觉无比的不自在，但是还请注意，日常用创可贴贴好乳首，避免因为衣物摩擦而高潮。此外，你和很多精灵一样，除了超短裙，都会喜欢勒出下体形状的紧身短裤，但还请量力而行，不要专注于过小的尺寸，以免出现阴蒂勃起的尴尬场面。</p>\
        <p class='transient'>职业特长：弓箭手（读风叶花·永青）、巫师（知风万墟·银耳）、德鲁伊（归风无我·擎壤）。</p>\
        <p class='transient'>返回<a href='race_light'>光种列表</a></p>\
        <p class='transient'>返回<a href='race_hub'>种族列表</a></p>",
        {
        tags: ["subrace_choice"],
        optionText: "亚族1",
        displayOrder: 1
    }),
    "light_subrace2": new undum.SimpleSituation(
        "<h1 class='transient'>龙族</h1>\
        <p class='transient'>龙族注意事项——</p>\
        <p class='transient'>一：你的性格将会出现不可逆的变化，包括但不限于高冷、贪财、好色、喜欢以长辈姿态教训他人、不懂装懂等，你对人类天生抱有居高临下的鄙视，你会认可强者的尊严，但难以认可他本身，可能会有所不适，请予以谅解。</p>\
        <p class='transient'>二：你蔑视万物，将他们视为蝼蚁，将自己的尊严看得无比重要，你会十分的贪财，并且为了钱财而不择手段，但却极少去出卖自己的尊严。如果有一天，有人给你金币让你做感到羞耻的事情，而你同意了，请注意，你可能恋爱了，当然，这样的情况较少，更多时候，你不过是恶堕了。</p>\
        <p class='transient'>三：你虽然将尊严看得高于财宝，但是请注意不要被金钱迷惑。有很多刚出无铭岛的龙族少女陷入了凄惨的贫困，最终被人用几枚金币骗成了厮守一生的妻子。</p>\
        <p class='transient'>四：你的脖子下面有一块拇指大小的逆鳞，这是你最重要的器官，无论你有多么好的脾气，在被人用力触碰后都会暴跳如雷，这种愤怒持续时间并不会很长，而且会在突然间结束，你的情绪会立刻恢复正常，并且极少会怪罪别人触碰你的逆鳞。</p>\
        <p class='transient'>五：你的逆鳞与你的龙角材质相同，如果有人将手指尖包裹魔力，轻轻戳了你的逆鳞，你会出现“逆鳞综合征”，主要表现为立刻张开双腿、胸部至膝盖的所有肌肉出现痉挛、无止境地潮吹等，这种状况视紊乱度而定，一般持续五分钟至二十四小时不等。通常情况下，你会处在暴怒之中，神志清晰地发觉自己像条低贱的母狗发出呻吟。因此，你可以像其他龙族一样，用颈环或是围巾遮盖逆鳞。</p>\
        <p class='transient'>职业特长：骑士（赤鳞）、御魔使（苍鳞）、巫师（黑鳞）、格斗家（青鳞）。</p>\
        <p class='transient'>返回<a href='race_light'>光种列表</a></p>\
        <p class='transient'>返回<a href='race_hub'>种族列表</a></p>",
        {
        tags: ["subrace_choice"],
        optionText: "亚族2",
        displayOrder: 2
    }),
    "light_subrace3": new undum.SimpleSituation(
        "<h1 class='transient'>造物</h1>\
        <p class='transient'>造物注意事项——</p>\
        <p class='transient'>一：作为造物，你的性格与情感都是插件的一部分，可以随时调整，但是通常而言都有最佳性格，你可以通过自我调节程序进行修正选择选择。但是无论怎么选择，你心中都会保持着对自由、摆脱控制的渴望，可能会有所不适，请予以谅解。</p>\
        <p class='transient'>二：每一个造物都会有相对应的控制器，这个控制器可以相对应地控制你除了记忆以外的所有认知（“道歉时自慰是常识”、“自己生来就是为了侍奉主人”等）、行为（强制发情、放尿、排卵、肉体控制等）、性格（傲娇、三无、高冷、害羞、元气、温柔等）。多年以前，当“造物主”丢弃万物离开后，所有的控制器都已经遗失在大陆的各处，但总会有人捡到它们，发生命中注定的邂逅。</p>\
        <p class='transient'>三：你的记忆中储存有大量的星辰机术技巧，你可以通过“魔力解构法”制造自己的备用肢体、器官与备用身体，亦或是现场制造星辰傀儡进行作战。但是请注意，完整的备用身体的知觉（痛觉系统可以关闭）是共享的，当你同时启用多具备用身体时，知觉并非是相加，而是阶乘的，因此，经常会发生造物启用四具身体而宕机的情况。</p>\
        <p class='transient'>职业特长：炼金术师（星辰探索者十二型）、枪手（陨星者七型）。</p>\
        <p class='transient'>返回<a href='race_light'>光种列表</a></p>\
        <p class='transient'>返回<a href='race_hub'>种族列表</a></p>",
        {
        tags: ["subrace_choice"],
        optionText: "亚族3",
        displayOrder: 3
    }),

//夜种分割线

    "race_night": new undum.SimpleSituation(
        "<h1 class='transient'>夜种列表</h1>\
        <p class='transient'>夜种是天生与光种对立的物种，他们叛逆不羁，挑战一切权威。</p>\
        <p class='transient'><a href='night_subrace1'>恶魔族</a>：你属于深渊的恶魔族，具有恶魔之角和尾巴，这赋予你超凡的魔法感知力和力量。虽只能是小恶魔或魅魔，但你天生放荡魅力十足，对你来说，发情就是生活的常态。</p>\
        <p class='transient'><a href='night_subrace2'>血族</a>：你属于欧尼希瑞亚大陆的血族，生于永夜的冻土，能通过魔力生成血族之翼，拥有永恒的青春与无尽的寿命。你精通各种艺术，对人类视为普通的食物，将他们视为低等生物。</p>\
        <p class='transient'><a href='night_subrace3'>鬼族</a>：你来自遥远的东方，是恶鬼夜叉种的上位，拥有一对鬼角和一对鬼目，这使得你具有超出其他种族的力量和爆发力。然而，你的鬼角和足心极度敏感，被抚摸可能会引发发情状态，虽然你不怕疼痛，却极度怕痒。</p>\
        <p class='transient'>点击<a href='race_hub'>这里</a>返回种族列表</p>",
        {
        tags: ["race_choice"],
        optionText: "夜种",
        displayOrder: 3
    }),
    "night_subrace1": new undum.SimpleSituation(
        "<h1 class='transient'>恶魔族</h1>\
        <p class='transient'>恶魔族注意事项——</p>\
        <p class='transient'>一：你的性格将会出现不可逆的变化，包括但不限于嗜精、厌恶圣光、喜欢做恶作剧等，你会对于纯爱之物有所赞美，但却醉心于单纯的肉体交合的快感，你会认为不论是谁的肉棒都无所谓，只要能让你感受到快乐，那便足够了，可能会有所不适，请予以谅解。</p>\
        <p class='transient'>二：作为恶魔族，你不需要食用正常的食物，对于你而言，精液与世间的恶意就是最好的粮食，虽然大部分恶魔族都会完全抛弃羞耻心，但是仍然有部分个体难以接受随意吞饮陌生人的精液而实力弱小、营养不良，请注意，生存并不是一件值得羞耻的事情。</p>\
        <p class='transient'>三：作为邪恶的象征、平衡世界意识的存在，恶魔族本身并不与圣光为敌，但是，绝大部分教堂的牧师与修女并不会管这些，圣光仍然会对你造成剧烈的伤害，在地下会场里，每天的都会有大量丧失战斗力的恶魔被作为奴隶出售。</p>\
        <p class='transient'>职业特长：召唤师（莎布·尼古拉斯）、术师（犹格索托斯）。</p>\
        <p class='transient'>返回<a href='race_night'>夜种列表</a></p>\
        <p class='transient'>返回<a href='race_hub'>种族列表</a></p>",
        {
        tags: ["subrace_choice"],
        optionText: "亚族1",
        displayOrder: 1
    }),
    "night_subrace2": new undum.SimpleSituation(
        "<h1 class='transient'>血族</h1>\
        <p class='transient'>血族注意事项——</p>\
        <p class='transient'>一：你的性格将会出现不可逆的变化，包括但不限于自以为是的高傲、厌恶粗鲁等，你对所有的种族都抱有歧视的态度，认为他们不过是不懂得优雅的低贱种族，自认为不会爱上其他的种族，可能会有所不适，请予以谅解。</p>\
        <p class='transient'>二：血族的食物是来自于其他种族的血液，随着年岁与实力的增长，你所需要的血液量将会越来越少，通常而言，新生儿每天只需吸食200ml的血液便足以维持一天的活动与魔力。但是，请注意，如果你一次性吸食过多的血液，会出现“醉血”，主要症状包括但不限于神志模糊、无意识地说出心里话、身体发热、四肢无力等，与人类的醉酒类似，但要剧烈许多，且不会有后遗症。</p>\
        <p class='transient'>三：虽然你的主要食物是血液，但是他种族的唾液对于你来说是强烈的催情剂，如果你的口腔或胃中有其他种族的唾液，魔力回路便会停止运转，你会首先感觉燥热自体内迸发，全身瞬间脱力，无法支撑任何的站立动作，然后口中的唾液急速分泌，开始沿着嘴角滑落，同时泪腺开始不受控制地排出眼泪，而后下体出现剧烈的空虚感，爱液和尿液会一起如同泉涌般流下。就已知情报看来，这种发情状态下的血族虽然能保持些许理智，但身体已经和意志相违背了，不知道是“造物主”的恶趣味还是其他原因，包括你在内，所有的血族在吞食其他种族唾液后，都会跌坐在地，以鸭子坐的姿势难以动弹，而脸部则正好对准其他种族的裆部。</p>\
        <p class='transient'>四：“唾液综合症”是血族在吞食其他种族唾液时可能会出现的一种症状，虽然并不是所有血族都有，但是可以确认这种症状的出现率在97%以上，主要症状表现为口腔与喉咙开始出现规律性蠕动，以方便其他种族进行“深喉”；阴道出现规律性收缩与舒张，为了给插入者带来更大的快感；虽然未曾尝过精液，但却不断涌现渴望舔肉棒、吃精液的想法等。绝大部分血族在形容自己出现这种状态的感觉“就像换了个人似的，明明对那些下等生物厌恶的要死，但却说着污言秽语，乞求对方插入自己”、“身体脱离了意志，看到肉棒就像疯了一样”。</p>\
        <p class='transient'>五：你和其他血族一样，厌恶阳光，虽然这种阳光并不会对你造成实质性伤害，但是被阳光持续照射后，身体敏感度会上升，同时力气逐渐减少，不论是什么动作都会产生快感，到后来变成心跳与呼吸都会高潮，因此之所以出现血族被太阳“晒死”的情况，纯粹是高潮太多导致神志崩坏，瘫软在地而无法觅食，最终饿死。因此，请注意在外出的时候备好太阳伞。</p>\
        <p class='transient'>六：血族最大的天敌并不是阳光，而是十字架。当你看到受过祝福的十字架时，你会产生难以抑制的愧疚感、羞耻感以及自慰的冲动。作为新生儿血族，当看到大小超过二十厘米的镀银十字架时，便会以M字开腿蹲在地上，一边自慰，一边哭泣着辱骂自己是“荡妇”、“母狗”等，同时羞耻心会激增，感觉自己的声音被别人听到、肌肤被别人看到都会害羞得无法自已。由于血族无法被杀死，时至今日，在下体插入十字架依旧是封印血族的最佳手段（插入十字架后的吸血鬼会一直保持恶堕自慰）。所以，请避免看到或接触十字架。</p>\
        <p class='transient'>职业特长：骑士（夜魇之剑）、御魔使（常黯噩梦）、召唤师（蔽日黑翼）、巫师（血色脉动）。</p>\
        <p class='transient'>返回<a href='race_night'>夜种列表</a></p>\
        <p class='transient'>返回<a href='race_hub'>种族列表</a></p>",
        {
        tags: ["subrace_choice"],
        optionText: "亚族2",
        displayOrder: 2
    }),
    "night_subrace3": new undum.SimpleSituation(
        "<h1 class='transient'>鬼族</h1>\
        <p class='transient'>鬼族注意事项——</p>\
        <p class='transient'>一：你的性格将会出现不可逆的变化，包括但不限于处事傲慢、漠视生命、暴虐无度、肆意妄为，你的行为处事将变得散漫而鲁莽，往往不会考虑这样的后果，可能会有所不适，请予以谅解。</p>\
        <p class='transient'>二：鬼族的双脚是身体最敏感的部位，同时也是最羞耻的地方，一旦被抓住脚踝，便会不由自主地放松肌肉，双腿脱力，害羞地扭捏，两只小肉足只能软绵绵地乱蹬。因此，请务必在战斗中避免被敌人握住脚踝。</p>\
        <p class='transient'>三：鬼族的痒感与快感、尿意是相通的，你的所有痒感都会转化为同等的快感。当别人对你的脚心挠痒痒时，只需要几秒的时间，便能看到你的内裤湿的一塌糊涂，紧贴在光洁的阴唇上，一边颤抖着放出尿来，一边恭候肉棒的大驾光临。因此，各种族的雄性都会非常乐于强迫你为他们足交，一边享受你穿着踩脚袜的嫩足在肉棒上摩擦，一边欣赏你失禁高潮的模样。</p>\
        <p class='transient'>四：鬼族是嗜酒如命的种族，对你而言，酒是生活的必需品，所以你时常会处于微醺与酩酊大醉的状态之间。但是，鬼族不能将酒与精液混合饮用，一旦二者液体在胃中混合的刹那，就会弓背高潮，直至昏迷。因此，请务必在饮酒前，先仔细辨别其中是否有令你心旷神怡、口生津液的精液味。</p>\
        <p class='transient'>职业特长：武士（断浪）、格斗家（崩山）、巫女（侍鬼）、刺客（欣夜）。</p>\
        <p class='transient'>返回<a href='race_night'>夜种列表</a></p>\
        <p class='transient'>返回<a href='race_hub'>种族列表</a></p>",
        {
        tags: ["subrace_choice"],
        optionText: "亚族3",
        displayOrder: 3
    }),

//人种分割线

    "race_man": new undum.SimpleSituation(
        "<h1 class='transient'>人种列表</h1>\
        <p class='transient'>人种是最平庸但也是最和蔼的种族，他们游走在万物间不断学习并成长。</p>\
        <p class='transient'><a href='man_subrace1'>人族</a>：你属于欧尼希瑞亚大陆的人族，拥有平庸但全能的属性，可以胜任大部分工作，信仰圣光并与魔物对抗。你无生殖隔离，任何后代都会与授精者同族，这使得人族成为连接万物意志的纯洁桥梁。</p>\
        <p class='transient'><a href='man_subrace2'>矮人族</a>：你是欧尼希瑞亚大陆的矮人族，身高最高只有一米四五，这使你的行动力相对较弱，但耐力出类拔萃。你的下体具有极高的柔韧性，特征明显。</p>\
        <p class='transient'>点击<a href='race_hub'>这里</a>返回种族列表</p>",
        {
        tags: ["race_choice"],
        optionText: "人种",
        displayOrder: 4
    }),
    "man_subrace1": new undum.SimpleSituation(
        "<h1 class='transient'>人族</h1>\
        <p class='transient'>人族注意事项——</p>\
        <p class='transient'>一：人族因为自身的纯洁性，更易成为神使，但却也更容易受到催眠。即便是最低级的催眠术，都可以将你耍得团团转，因此，一旦发现下列类似的状态时，请多加留心，你可能已经被催眠了——</p>\
        <p class='transient'>1.时不时地发呆，感觉衣服好像多了些褶皱，有些凌乱。这意味着你可能刚刚被人玩弄了身体。</p>\
        <p class='transient'>2.内裤忽然有些黏糊糊的感觉，大腿不自觉夹紧，有些迈不开步子。这意味着你可能刚刚被人中出，现在精液正从你的子宫流出小穴，打湿了内裤。</p>\
        <p class='transient'>3.嘴巴有些发酸，喉咙发涩，口腔有淡淡的腥味。这意味着你可能刚刚帮人口交深喉过，并一脸开心地吞下了别人的精液。</p>\
        <p class='transient'>4.大街上的人时不时地盯着你看，面红耳赤，但自己却无法察觉异样。这意味着你可能正穿着情趣服装，乃至于是赤身裸体。</p>\
        <p class='transient'>5.不自觉地踮脚，微微弯腰，向后撅屁股。请尝试快速缩紧小穴，如果发现自己的脚踮得更高，两腿不停打颤，这意味着你可能正在被人后入。</p>\
        <p class='transient'>6.没来由得，总是喜欢抚摸一些特定东西。这意味你可能被替换了尝试，此刻正在抚摸别人的肉棒。</p>\
        <p class='transient'>7.有闺蜜向你询问自己的“朋友”或“爱人”是谁。这意味你的“朋友”、“爱人”可能向你施加了催眠。</p>\
        <p class='transient'>职业特长：全部</p>\
        <p class='transient'>返回<a href='race_man'>人种列表</a></p>\
        <p class='transient'>返回<a href='race_hub'>种族列表</a></p>",
        {
        tags: ["subrace_choice"],
        optionText: "亚族1",
        displayOrder: 1
    }),
    "man_subrace2": new undum.SimpleSituation(
        "<h1 class='transient'>矮人族</h1>\
        <p class='transient'>矮人族注意事项——</p>\
        <p class='transient'>一：你的性格将会出现不可逆的变化，包括但不限于开朗活泼、重度嗜牛奶和酒、讨厌精灵族等，你会对人形生物抱有好感（精灵族除外），并愿意与他们成为生死与共的战友，可能会有所不适，请予以谅解。</p>\
        <p class='transient'>二：你会对机械产品产生极大的热情，精通于制造蒸汽朋克的产品，这些产品不限于武器，还会有性拷问用具，此外，你还会制造些许高科技的类赛博朋克机器，这是“造物主”留下的技术，但不知为何，当前你所拥有的仅有“机械奸”相关的制造技术。</p>\
        <p class='transient'>三：因为矮人族天生的性格，所以请格外注意陌生人递过来的酒与牛奶，不要轻易饮用，以免发生意外。</p>\
        <p class='transient'>职业特长：炼金术师（古法缔造）、枪手（经纬裁定者）。</p>\
        <p class='transient'>返回<a href='race_man'>人种列表</a></p>\
        <p class='transient'>返回<a href='race_hub'>种族列表</a></p>",
        {
        tags: ["subrace_choice"],
        optionText: "亚族2",
        displayOrder: 2
    }),


};


// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "start";

// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */
undum.game.qualities = {
    skill: new undum.IntegerQuality(
        "Skill", {priority:"0001", group:'stats'}
    ),
    stamina: new undum.NumericQuality(
        "Stamina", {priority:"0002", group:'stats'}
    ),
    luck: new undum.FudgeAdjectivesQuality( // Fudge as in the FUDGE RPG
        "<span title='Skill, Stamina and Luck are reverently borrowed from the Fighting Fantasy series of gamebooks. The words representing Luck are from the FUDGE RPG. This tooltip is illustrating that you can use any HTML in the label for a quality (in this case a span containing a title attribute).'>Luck</span>",
        {priority:"0003", group:'stats'}
    ),

    inspiration: new undum.NonZeroIntegerQuality(
        "Inspiration", {priority:"0001", group:'progress'}
    ),
    novice: new undum.OnOffQuality(
        "Novice", {priority:"0002", group:'progress', onDisplay:"&#10003;"}
    )
};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
    stats: new undum.QualityGroup(null, {priority:"0001"}),
    progress: new undum.QualityGroup('Progress', {priority:"0002"})
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function(character, system) {
    character.qualities.skill = 12;
    character.qualities.stamina = 12;
    character.qualities.luck = 0;
    character.qualities.novice = 1;
    character.qualities.inspiration = 0;
    system.setCharacterText("<p>You are starting on an exciting journey.</p>");
};
