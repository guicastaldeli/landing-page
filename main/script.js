function rgstr__() {
    //Inputs
        const nInput = document.getElementById('i-n--');
        const eInput = document.getElementById('i-e--');
        const cnInput = document.getElementById('i-cn--');

        const sbmtInput = document.getElementById('i-sbmt--');
    //

    //Labels
        const niLabel = document.getElementById('l-i-n--');
        const eiLabel = document.getElementById('l-i-e--');
        const cniLabel = document.getElementById('l-i-cn--');
    //

    //recaptcha
    const recaptcha = document.querySelector('.g-recaptcha');

    //logo
        const logo = document.getElementById('logo--');

        //logo redirect...
            function rdctLogo__() {
                logo.addEventListener('click', () => {
                    window.location.href = './';
                })
            }
        //

        //exec...
        rdctLogo__();
    //

    //Submit...
        function submit__() {
            sbmtInput.addEventListener('click', () => {
                if((nInput && eInput && cnInput).value.trim() !== '' && emFormat__(eInput.value)) {
                    window.location.href = '/main/index.html'; // --------- WHATSAPP GROUP... ------------
                }
            })
        }
    //

    //Submit error...
        function submitErr__() {
            sbmtInput.addEventListener('click', (e) => {
                if(nInput.value.trim() === '') {
                    nInput.classList.add('i-err-');
                    niLabel.classList.add('l-err-');
                }

                if(eInput.value.trim() === '' || !emFormat__(eInput.value)) {
                    eInput.classList.add('i-err-');
                    eiLabel.classList.add('l-err-');
                }

                if(cnInput.value.trim() === '') {
                    cnInput.classList.add('i-err-');
                    cniLabel.classList.add('l-err-');
                }

                if(grecaptcha.getResponse() === '') {
                    recaptcha.classList.add('g-r-b-err-');
                }

                e.preventDefault();
            })
        }
    //

    //Insert text in inputs...
        function inputTxt__() {
            nInput.addEventListener('input', () => {
                if(nInput.value.trim() !== '') {
                    nInput.classList.remove('i-err-');
                    niLabel.classList.remove('l-err-');
                }
            })

            eInput.addEventListener('input', () => {
                if(eInput.value.trim() !== '' || !regex.test(eInput.value.trim())) {
                    eInput.classList.remove('i-err-');
                    eiLabel.classList.remove('l-err-');
                }
            })

            cnInput.addEventListener('input', () => {
                if(cnInput.value.trim() !== '') {
                    cnInput.classList.remove('i-err-');
                    cniLabel.classList.remove('l-err-');
                }
            })

            recaptcha.addEventListener('click', () => {
                recaptcha.classList.remove('g-r-b-err-');
            });
        }
    //

    //Formats...
        //Phone number...
            function pnFormat__(nEl) {
                let pN = nEl.value.replace(/\D/g, '');

                if(pN.length <= 2) {
                    nEl.value = pN;
                } else if(pN.length <= 5) {
                    pN = `(${pN.slice(0, 2)}) ${pN.slice(2)}`;
                } else if(pN.length <= 10) {
                    pN = `(${pN.slice(0, 2)}) ${pN.slice(2, 6)}-${pN.slice(6)}`;
                } else {
                    pN = `(${pN.slice(0, 2)}) ${pN.slice(2, 7)}-${pN.slice(7, 11)}`;
                }

                nEl.value = pN;
            }
        //

        //E-mail...
            function emFormat__(email) {
                const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

                return regex.test(email.trim());
            }
        //
    //

    //exec...
        submit__();
        submitErr__();
        inputTxt__();

        //Phone number
        cnInput.addEventListener('input', () => pnFormat__(cnInput));
    //
}
rgstr__();