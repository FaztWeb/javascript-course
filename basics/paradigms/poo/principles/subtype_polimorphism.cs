Public class Person {
  public string Name {get; set;}
  public string SurName {get; set;}
}

Public class Programmer:Person {
  public string KnowLanguage {get; set;}
}

public void WriteFullName(Person p){
  Console.WriteLine(p.Name + " " + p.SurName);
}

var a = new Person();
a.Name = 'Fabian';
a.SurName = 'Jesus';

var b = new Programmer();
b.Name = 'Mario';
b.SurName = 'Alberto';
b.KnowLanguage = 'C#';

WriteFullName(a);
WriteFullName(b);
