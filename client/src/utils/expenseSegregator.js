

export const expenseSegregator=(expenselist)=> {
      console.log(expenselist)
      let newList=[],templist=[];
      templist.push(expenselist[0])
      for(let i=1;i<expenselist.length;++i){
           if(templist!=[] && expenselist[i].date===templist[0]?.date){
            templist.push(expenselist[i]);
           }
           else{
              newList.push(templist);
              templist=[];
              templist.push(expenselist[i])
           }
      }
     return newList;
}
