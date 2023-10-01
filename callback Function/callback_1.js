console.log('Start')

function loginUserServer(email, callback) {
  setTimeout(() => {
    console.log('We have the data')
    callback({ userEmail: email })
  }, 5000)
}

const user = loginUserServer('muditwt@scaler.com', (user) => {
  console.log(user)
})

console.log('End')