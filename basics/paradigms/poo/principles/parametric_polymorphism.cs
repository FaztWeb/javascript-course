// Parametric polymorphismallows a method to work on parameters of any type. Often it is also
// calledgenericsand many languages support it in built-in method

// in C#, we can define a list of items whose type
//  is not defined in advance using the List<T> generic types

public class Stack<T> {
  private T[] items;
  private int count;
  public void Push(T item){};
  public T Pop(){}
}

var stack = new Stack<String>();
