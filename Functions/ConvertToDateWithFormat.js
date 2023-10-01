function ConvertToDateWithFormat(dateInStr,Format){
    /**
     * This function is taking date in string and convert it into specific format you put
     * INPUT  :
     * OUTPUT :
     */
    let newDate;
    if(Format==='YYYY-MM-DD')
    {
        dateSustr=dateInStr.substring(0,10);
        console.log('dateSustr :'+dateSustr);
        newDate=new Date(dateSustr);
    }
    else if(Format==='YYYY-MM-DD HH:MM:SS'){
        dateSustr=dateInStr.substring(0,19)+'Z';
        console.log('dateSustr :'+dateSustr);
        newDate=new Date(dateSustr);
    }
    else if(Format==='YYYY-MM-DD HH:MM:SS.SSS')
    {
        let position=dateInStr.indexOf('.');
        dateSustr=dateInStr.substring(0,19)+dateInStr.substring(position,position+4)+'Z';
        console.log('Possition :'+dateInStr.indexOf('.'));
        console.log('dateSustr :'+dateSustr);
        newDate=new Date(dateSustr);    
    }
    else if(Format==='YYYY-MM-DD HH:MM:SS.SSSSSS')
    {
        let position=dateInStr.indexOf('.');
        dateSustr=dateInStr.substring(0,19)+dateInStr.substring(position,position+7)+'Z';
        console.log('Possition :'+dateInStr.indexOf('.'));
        console.log('dateSustr :'+dateSustr);
        newDate=new Date(dateSustr);      
    }
    else
    {
        return null;
    }
   return newDate;
}

let d='2022-03-23T12:33:56.123456Z';
// console.log(ConvertToDateWithFormat(d,'YYYY-MM-DD'));

// let d='2022-03-23T12:33:56Z';
// console.log(ConvertToDateWithFormat(d,'YYYY-MM-DD HH:MM:SS'));
console.log(ConvertToDateWithFormat(d,'YYYY-MM-DD HH:'));