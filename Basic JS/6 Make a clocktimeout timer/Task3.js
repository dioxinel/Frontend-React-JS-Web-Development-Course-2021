function timer(seconds) {
  let restTime = seconds;
  const interval = setInterval(() => {
    if (restTime <= 0) {
      clearInterval(interval)
    }
    console.log(`Timer: ${restTime}`)
    restTime--;    
  }, 1000)
}

timer(10)