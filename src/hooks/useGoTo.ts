export const useGoTo = (router) => {
  const goTo = (routeName) => {
    router.push({
      name: routeName
    })
  }

  return {
    goTo
  }
}