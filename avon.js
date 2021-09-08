+eval const avon = {
  name:"avon",
  age:"17",
  robs:"cookies",
  loves:["breaking JS and my bots uwu", " stealing cookies", " reading"],
  hates:["insects", " homophobics", " racists", " etc"],
  songs:["utaite by mafumafu", " Ignite by Alan walker", " Everytime the rain comes down by Anna blue and Damien Dawn"]
 }
msg.channel.send(`
                     name: ${avon.name},
                     age: ${avon.age},
                     robs: ${avon.robs},
                     loves: ${avon.loves}
                     hates: ${avon.hates},
                     fav songs: ${avon.songs}
                 `)
