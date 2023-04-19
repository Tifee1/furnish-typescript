export const formatPrice = (price) => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
  }).format(price / 100)
}

export const uniqueValues = (arr, val, select) => {
  if (select) {
    return ['all', ...new Set(arr.map((item) => item.colors).flat())]
  }
  return ['all', ...new Set(arr.map((item) => item[val]))]
}

export const getLocalStorage = (type) => {
  let storage = localStorage.getItem(type)
  if (!storage) {
    storage = []
  } else {
    storage = JSON.parse(localStorage.getItem(type))
  }
  return storage
}
