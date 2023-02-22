export const calculateAge = (s) =>{

    console.log("S", s)

    const currentDate = new Date();
  
    const dateSplitted = s.split("-");
    const year = dateSplitted[0];
    const month = dateSplitted[1];
    
    const currentYearSplitted = currentDate.toLocaleDateString().split(" ")[0];
    
    const currentYear = currentYearSplitted.split("/")[2];
    const currentMonth = currentYearSplitted.split("/")[1];
  
    let age = currentYear - year; 
    
    if(currentMonth<month){
          age++;
    }
    
    return age;
  }