let StafList=[]

class StaffList {
    //add your code here  
   
    add(name,age){
        let exists_flag=false;
        StafList.forEach(function(x){
            if(x.name===name){
                exists_flag=true;
                return exists_flag;
            }
        })
        if(exists_flag){
            console.log(`${name} already exist`)
            return;
        }
        if(age>20)
        {
           StafList.push({name:name,age:age}) 
        }
        else{
            throw 'Staff member age must be greater than 20'
        }
    }
    remove(name){
        let exists_flag=false;
        let index;
        if(StafList.length>0){
            for(let j=0;j<=StafList.length;j++){
                if(StafList[j].name===name)
                {
                exists_flag=true;
                index=j;
                break;
                } 
            }
        }
      if(exists_flag){
            // console.log(`${name} already exist and is deleted`)
            StafList.splice(index,1);
            return true;
        }
      else{
          return false;
      }
        
    }
    getSize(){
        return StafList.length;
    }
}


let p=new StaffList()
p.add('vitthal',21);
p.add('Ram',22);
console.log(StafList);
p.remove('vitthal');
console.log(StafList);