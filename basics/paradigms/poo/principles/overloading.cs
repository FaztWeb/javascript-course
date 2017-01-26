// allows to count the number of digits in a number or the number of characters in a string in a
// uniform manner, just calling the same method.

public int CountItems (int x) {
  return x.ToString().Length();
}

public int CountItems (string x){
  return x.Length();
}


// Overloading can also be expressed through methods with different numbers of arguments,

public int Sum(int x, int y) {
  return Sum(x, y, 0);
}

public int Sum(int x, int y, int z){
  return x + y + z;
}
