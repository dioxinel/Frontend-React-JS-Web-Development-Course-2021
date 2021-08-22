const globalVar = 'GlobalVar';

function func() {
  console.log(globalVar)

  {
    const varInBlock = 'VarInBlock';
    console.log(varInBlock)
  }

  try {
    console.log(varInBlock)
  } catch (error) {
    console.log(error)
  }

  const localVar = 'LocalVar';
  console.log(localVar)
}

func()

try {
  console.log(localVar)
} catch (error) {
  console.log(error)
}

