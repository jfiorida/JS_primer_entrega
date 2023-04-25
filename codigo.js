
            function aleatorio(min, max) {
                return Math.floor(Math.random() * (max - min + 1) + min)
            }
            const eleccion =(jugada) =>{
                let resultado = ""
                if(jugada == 1) {
                    resultado = "papel 📃"
                } else if(jugada == 2) {
                    resultado ="piedra 🥔" 
                } else if(jugada == 3) {
                    resultado ="tijera ✂"
                } else {
                    resultado ="mal elegido"
                }
                return resultado 
            }
                   
            // 1 es piedra, 2 es papel, 3 es tijera
            let jugador = 0
            let pc = 0
            let triunfos = 0
            let perdidas = 0

            while (triunfos < 3 && perdidas < 3) {
                pc = aleatorio(1,3)
                jugador = prompt("elige 1 para papel, 2 para piedra, 3 para tijera")
                 //alert("elegistes " + jugador)
                alert("pc elige: " + eleccion  (pc))
                alert("tu eliges: " + eleccion(jugador))

            //combate
            if(jugador == pc) {
                alert("Empate")
            } 
            else if(jugador == 1 && pc == 2) {
                alert("GANASTES")
                triunfos = triunfos + 1
            }
            else if(jugador == 2 && pc == 3) {
                alert("GANASTES")
                triunfos = triunfos + 1
            }
            else if(jugador == 3 && pc == 1) {
                alert("GANASTES")
                triunfos = triunfos + 1
            }
            else  {
                alert("PERDISTES")
                perdidas = perdidas + 1
            } 
            alert("Ganastes " + triunfos + " veces. perdiste " + perdidas + " veces. " )
                }
          