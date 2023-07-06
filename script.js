function doFirst(){
            var button = document.getElementById('button');
            var removed=document.getElementById('removeItem');
            var clean=document.getElementById('clear');
            button.addEventListener('click',buttom,false);
            removed.addEventListener('click',slice,false);
            clean.addEventListener('click',clad,false);


            //display(one) 
       }
        function buttom(){
            var one = document.getElementById('one').value;
            var two = document.getElementById('two').value;
            sessionStorage.setItem(one,two)  //sessionStorage is class that builtin to html5. it has a method called setItem that is builtin html5 it takes the parameters users will store in his computer
            display(one)   //this is a function
            document.getElementById('one').value=''
            document.getElementById('two').value=''
        }
        function display(one){
            var rightbox= document.getElementById('rightbox');
            rightbox.innerHTML=''

            for(var x=0 ; x< sessionStorage.length; x++){
                var a =sessionStorage.key(x);
                var b =sessionStorage.getItem(a);
                rightbox.innerHTML+= a+' - ' +b+ '<br/>'

            }
            rightbox.style.color='red';
            rightbox.style.padding='30px';
        }

        function slice(){
            
            //rightbox.innerHTML=rightbox.innerHTML.slice(0,-1);
            //sessionStorage.removeItem();
            rightbox.innerHTML=rightbox.innerHTML.slice(0,-1);
        }

        function clad(){
            rightbox.innerHTML='';
            sessionStorage.clear();
        }


            
        
        window.addEventListener('load',doFirst,false);