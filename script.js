   let title = document.getElementById("title")
        title.textContent = 'React for Engineer'

        let message = document.getElementById("message")


        const intervalTime = 1000
        let time = 0
        let interval = setInterval(() => {
            time++
            message.textContent = time + ' sec'
        }, intervalTime)

        let stopButton = document.getElementById("stop-button")

        stopButton.addEventListener('click', () => {
            clearInterval(interval)
        })