function curriedAdd(total) {

  if (total===undefined) {
    return 0
  } 

  const add = (num) => {
    if (num === undefined) {
      return total;
    }
    total += num;
    return add
  }

  

  return add
  

}

module.exports = { curriedAdd };
