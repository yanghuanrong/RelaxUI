export function casks (obj1, obj2) {
  const L1 = obj1.x
  const T1 = obj1.y
  const R1 = L1 + obj1.w
  const B1 = T1 + obj1.h

  const L2 = obj2.x
  const T2 = obj2.y
  const R2 = L2 + obj2.w
  const B2 = T2 + obj2.h

  if (L1 >= R2 || T1 >= B2 || R1 <= L2 || B1 <= T2) {
    return false
  }
  return true
}