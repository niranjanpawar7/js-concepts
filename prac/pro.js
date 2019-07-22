  
   

    function Niranjan (first, last){  

        this.firstName = first;
        this.lastName = last;
    }

    Niranjan.prototype.getFullname = function() {
       return this.firstName  + ' ' +  this.lastName;
    };

    // Niranjan.prototype.getSalary = function(sal) {
    //    return sal;
    // };

    

    var check = new Niranjan('niranjan', 'pawar');

    // console.log(check.getSalary(100));  

    console.log(check.getFullname());
     
    