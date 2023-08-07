function isLeapYear(year) {
    if (year % 4 == 0) 
    {
        if (year % 100 == 0) 
        {
            if (year % 400 == 0) {
                return true;
            }
            
                return false;
            
        }
        
            return true;
        
    }
    
        return false;
    
}
var result=isLeapYear(2001);
console.log(result)