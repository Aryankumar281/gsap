var tl = gsap.timeline();

tl.from('#nav img,#nav button ,#nav h3, #nav h4' ,{
    y:-100,
    duration:1,
    opacity:0,
    stagger:0.2
})
tl.from('#main h1',{
    y:100,
    opacity:0,
    stagger:0.3
})
gsap.from('#main img',{
    scale:0,
    delay:1,
    stagger:0.5
})
tl.from('h5',{
    scale:0,
    opacity:0
})
tl.to('h5',{
    y:20,
    repeat:-1,
    duration:1,
    yoyo:true,
    
})
