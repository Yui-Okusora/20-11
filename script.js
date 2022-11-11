function show()
{
    const title = document.getElementById('title');
    const heart = document.getElementById('heart');
    const lop = document.getElementById('lop');
    const gv = document.getElementById('gv');
    const img = document.getElementsByTagName('img');
    title.style.display='block';
    heart.style.display='block';
    lop.style.display='block';
    gv.style.display='block';
    for(const x of img){
        x.style.display='block';
    }
    document.getElementsByTagName('button')[0].style.display='none';
    document.body.style.backgroundColor='#ECC7A0';
}
