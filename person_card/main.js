function create(true_card_area="500224",true_card_birthday="19970606",true_card_order="666"){
  
    let ture_card_auth = 0;
    const dirt ={"0": "1", "1": "0", "2": "X", "3": "9", "4": "8", "5": "7", "6": "6", "7": "5", "8": "4", "9": "3",
"10": "2"};
    const auth_code = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
    let now_17 = `${true_card_area + true_card_birthday + true_card_order}`;
    let s = now_17;
    for(let i in auth_code){
        let r = auth_code[i] * now_17[i]
    
        ture_card_auth += r
    }

    

    ture_card_auth = dirt[`${ture_card_auth%11}`];
    // console.log(ture_card_auth);
    let TRUE = s+ture_card_auth;
    return TRUE;
}
function Go(args){
    const R= [];
    for(let i=0;i<args.n;i++){
        let r =parseInt(Math.random()*999)+"";
        if(r.length===2){
             r= "0"+r
        }else if(r.length===1){
            r = "00"+r
        }
       R.push(
        create(args.area,args.birthday,r)
       ) 
    }
    console.log(R);
}

/*
@arguments 
    area => string ;
    birthday => string ;
    n => int ;

 */
Go({
    area:"500224",
    birthday:"19970606",
    n:100
});


