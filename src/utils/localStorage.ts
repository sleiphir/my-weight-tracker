export function get<T>(name: string): T[]
{
  return JSON.parse(localStorage.getItem(name) ?? "[]");
}

export function set<T>(name: string, data: T[])
{
  localStorage.setItem(name, JSON.stringify(data));
}

export function update<T>(name: string, index: number, data: T)
{
  const array = get<T>(name);
  if (array.length > index) {
    array[index] = data;
    set(name, array);
  }
}

export function push<T>(name: string, data: T)
{
  const array = get<T>(name);
  array.push(data);
  set(name, array);
}

export function remove(name: string, index: number)
{
  const array = get(name);
  array.splice(index, 1);
  set(name, array);
}

export function reset()
{
  localStorage.clear();
}
