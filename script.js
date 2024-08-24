const video = document.getElementById("video");
        const scare = document.querySelector(".scare");
        const loginButton = document.getElementById("login-button");
        const loginContainer = document.getElementById("login-container");

        loginButton.addEventListener("click", function(event) {
            event.preventDefault();

            // Di sini Anda biasanya akan memvalidasi kredensial login
            const usernameInput = document.getElementById("username").value;
            const passwordInput = document.getElementById("password").value;
            const validUsername = "user";
            const validPassword = "Admin#1234";

            // Cek apakah username sama pw itu bener
            if (usernameInput === validUsername && passwordInput === validPassword) {
                loginContainer.style.display = "none"; // Menghilangkan form login
                scare.style.display = "block"; // Menampilkan video
                video.play();
                videoClick();
            } else {
                document.getElementById("error-message").textContent = "Username atau Password salah!";
            }
        });

        // Method/function videoClick
        function videoClick(event) {
            if(event) event.preventDefault();
            const { documentElement } = document;
            if(documentElement.requestFullscreen) documentElement.requestFullscreen();
            else if(documentElement.mozRequestFullScreen) documentElement.mozRequestFullScreen();
            else if(documentElement.webkitRequestFullscreen) documentElement.webkitRequestFullscreen();
            else if(documentElement.msRequestFullscreen) documentElement.msRequestFullscreen();
        }

        video.addEventListener("click", videoClick);