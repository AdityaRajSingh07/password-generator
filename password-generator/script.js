let passwordBox = document.getElementById(password)
        const length=12;
        
        const upperCase="QWERTYUIOPLKJHGFDSAZXCVBNM"
        const lowerCase="qwertyuioplkjhgfdsazxcvbnm"
        const symbol="!@#$%^&*()_+/*-+`~"
        const digit="1234567890"
        const allChars=upperCase + lowerCase + symbol + digit

        function createPassword(){
            let password="";
            password += upperCase[Math.floor(Math.random()*upperCase.length)]
            password += lowerCase[Math.floor(Math.random()*lowerCase.length)]
            password += digit[Math.floor(Math.random()*digit.length)]
            password += symbol[Math.floor(Math.random()*symbol.length)]
            

            while(length > password.length){
                password += allChars[Math.floor(Math.random()*allChars.length)]
            }

            passwordBox = password;
            console.log(passwordBox)
            return passwordBox

        }

