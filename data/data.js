

const creepySwamp = {
    id: 'creepy-swamp',
    title: 'A Dark Eerie Swamp',
    map: {
        top: '89%',
        left: '44%'
    },
    prerequisites: ['devil', 'mothMan'],
    image: 'creepySwamp.png',
    description: `
            You've heard tales of a predator attacking locals in a swamp near by, you hope that you don't run into any ghoulies, but alas, you see something emerge from the water in the distance...a...CREATURE'
    `,
    choices: [{
        id: 'capture',
        description: 'Try to capture the creature',
        result: `
            Its a friggen swamp creature, how tuff can it be, plus you gotta show jeff and lenny when you get back home-- thank god you brought your favorite rope today- you try to lasso that wet slimy beast but the rope just slides off- crap! That wet bugger slimes their way to you and give you the gnarliest wet willy you've ever gotten... and takes a nice bight out of your arm... maybe a rope wasn't the best idea. You lose 20HP.
        `,
        hp: -20,
        souvenirMugs: 0 
    }, {
        id: 'fight',
        description: 'Break out your trusty bottle of sanitizer and give that beastie a squirt!',
        result: `
            Hey, at least this sanitizer is finally getting put to good use-- you break off that little pump doohickey, and drench that bad mudda... i mean it came out of the swamp its already drenched , REGARDLESS, YOU DRENCH THAT BAD MUDDA WITH the rest of the sanitizer... to your surprise that little swamp moss recoils back into the water... your alive... for now. You pick up 10 souvenir mugs... uhh what?
        `,
        hp: 0,
        souvenirMugs: 10
    }, {
        id: 'run',
        description: 'Use your favorite Segway and GTFO!',
        result: `
            You mount your trusty steed and kick it into high gear... only to realize your tires are spinning like crazy... 'FUCK!' you say to yourself...'I knew i should have put my mud chains on!'... while you're talking to yourself (weirdo) that slime ball oozes over to you and gives you the slimiest wedgie you've ever experienced, you'll need a new pair of undies after this... oh and it takes a big ol' bite outta ur right shoulder... ur screwed!. You lose 35HP, efffff.`,
        hp: -35,
        souvenirMugs: 0
    }]
};

const devil = {
    id: 'devil',
    title: 'Pit Stop on the Jersey Turnpike',
    map: {
        top: '17%',
        left: '37%'
    },
    image: 'creepyGasStation.png',
    // audio: 'dragon.wav',
    // action: 'dragon-growl.aiff',
    description: `
        Your Segway always runs out of juice at the worst times-- with only a few more miles to your buddy Ervine's place you're trusty steed Juniper rolls to a disappointing stop. You see a gas station off in the distance and with high hopes, and Katie Perry's Fireworks blasting in your walkman, you set out on foot, dragging ol Juniper in tow. You make it about a 30 paces when you start to hear a rustling...and... giggling coming from the trees... **BAM** out of no where a goat with wings swoops down and almost impales you with its curved horns...it lands in front of you... you can not go forward... what are you going to do..
    `,
    choices: [{
        id: 'run',
        description: 'Get outta dodge!',
        result: `
            You hope that those hooves are ornamental, and turn tail and run, dragging ur POS Juniper behind you... sorry compadre, that winged goat impales you and ur stupid Segway. you lose 50HP... while reality fades away you hear that same giggle from earlier and a faint whisper 'The Jersey Devil ain't no fan of Segways.' with that.. Fireworks sill blaring from your walkman, you think to yourself, 'the jersey devil speaks in third person...huh'.
        `,
        hp: -100,
        souvenirMugs: 0
    }, {
        id: 'fight',
        description: 'You prepare to make a stand. Juniper needs some juice after all, and Ervine is cooking their famous chicken fried steak.',
        result: `
            You gut tells you to run, but Juniper and Katie Perry urge you to stand and FIGHT!! you look around for something to throw, anything at all, but you only have Juniper and ur walkman... wait... THE WALKMAN. You remember the advice your trashy Jersey shore Granny gave you...'if you ever see the jersey devil, blast Katie Perry and do the electric slide.' With no other options you give it a go... The Jersey devils wings turn into doughnuts and because its just a goat, it couldn't contain its appetite and starts to eat itself.... eventually dieing. 'I should call my Granny...' you say to yourself... from its delicious steaming bod you notice 25 souvenir mugs... how the hell are you gonna carry all of these....
        `,
        hp: 0,
        souvenirMugs: 25
    }, {
        id: 'Cus at it',
        description: 'Scared, alone, and with little else to do, you curse that stupid goat out.',
        result: `
            With no options left... i mean your not gonna sacrifice Juniper or Katie Perry... its the only cassette you brought, You decide to take a not from your trashy Jersey Shore Granny and swear like a fakin sailor... '!@#$@ you, you goat lookin mudda !@#@!$!#, you sloppy #@#$@#$ @#$, no horn havin, #@$@#.' The Jersey devil only delighted in all of this... in fact his friend Staton Island Satan was visiting and came up behind you and clocked you in the head with a tire iron. You only lose 10HP, but they steal Juniper, and your walk-man. SUCKS TO SUCK!  
        `,
        hp: -10,
        souvenirMugs: 0
    }]
};

const mothMan = {
    id: 'mothMan',
    title: 'Why are we in West Virginia again?',
    map: {
        top: '31%',
        left: '5%'
    },
    prerequisites: ['devil'],
    image: 'mothMan.png',
    // audio: 'treasure-chests.wav',
    // action: 'chest-opening.wav',
    description: `
            After that fun stop at Ervine's... that was some good chicken fried steak... you decide to head over to Point Pleasant West Virginia, to see some distant...very distant relatives... you decide to give ol Juniper a rest and got a rental for the remainder of ur trip... now ur folks live OUT THERE, im talking the sticks. You think you're getting close and you drive around a bend to find a GIANT MAN MOTH.. or is it a MOTH MAN standing in your way... 
    `,
    choices: [{
        id: 'sugar',
        description: 'You have some packets of Equal leftover from breakfast and decide to mix it with some water... maybe the poor thing is hungry.. plus its kind of cute.',
        result: `The Moth Man isn't a moth at all, but your great uncle Levi... man he looks bad for his age. He thanks you for the sugar water and hands you 50 souvenir mugs. how the F are you gonna carry all of these?`,
        hp: 0,
        souvenirMugs: 50
    }, {
        id: 'flashLight',
        description: 'You take out your pen light and hope for the best...Like a Moth Man to a flame, right?',
        result: `The Moth Man loves your pen light so much they ask you if you have another one they could have....you don't and give them yours... they thank you and guide you the rest of the way to your folks house... you're left confused for the rest of the time... wtf just happend? oh and the Moth Man gives you 500 souvenir mugs... this is getting ridiculous.`,
        hp: 0,
        souvenirMugs: 500
    }, {
        id: 'katiePerry',
        description: 'Not knowing what else to do, and going off of your experience with the Jersey Devil, you BLAST Katie Perry and start to do the elcetr....',
        result: `The Moth Man thing becomes enraged, they lunge towards you with moth like speed and cover you in a fine dust..."what the hel.." you pass out to the tune of Fireworks by Katie Perry... you're starting to get real tired of this song. When you awake you've been striped naked and have a bunch of sharpie penises drawn on your face..."real fucking mature moth man... real mature." the only thing you lose is your pride.`,
        hp: 0,
        gold: 0
    }]
};

const quests = [
    creepySwamp,
    devil,
    mothMan


];

export default quests;