console.log('Start')

function loginUserServer(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('We have the data')
      resolve({ userEmail: email })
    }, 3000)
  })
}

function getUserID(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(['23', '13', '28', '2'])
    }, 2000)
  })
}

function getUserIDname(ID) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`ID ${ID} name`)
    }, 2000)
  })
}

loginUserServer('muditwt@scaler.com')
  .then((userInfo) => getUserID(userInfo.email))
  .then((userID) => getUserIDname(userID[2]))
  .then((userIDname) => console.log(userIDname))

console.log('End')
