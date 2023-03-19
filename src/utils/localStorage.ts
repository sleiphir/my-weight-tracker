export function get<T>(name: string): T|null
{
  const item = localStorage.getItem(name);
  if (item === null) {
    return null;
  }
  return JSON.parse(item);
}

export function getArray<T>(name: string): T[]
{
  return JSON.parse(localStorage.getItem(name) ?? "[]");
}

export function set<T>(name: string, data: T)
{
  localStorage.setItem(name, JSON.stringify(data));
}

export function updateArray<T>(name: string, index: number, data: T)
{
  const array = getArray<T>(name);
  if (array.length > index) {
    array[index] = data;
    set(name, array);
  }
}

export function pushToArray<T>(name: string, data: T)
{
  const array = getArray<T>(name);
  array.push(data);
  set(name, array);
}

export function removeFromArray(name: string, index: number)
{
  const array = getArray(name);
  array.splice(index, 1);
  set(name, array);
}

export function reset()
{
  localStorage.clear();
}
