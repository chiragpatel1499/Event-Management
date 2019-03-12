using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Demo5
{
    class Program
    {
        static void Main(string[] args)
        {
            List<University> listStudents = University.InitializeStudents();
            //var output1 = listStudents.Where(x => x.City == "Surat");
            var output1 = from m in listStudents
                          where m.City == "Surat"
                          select m;
            Console.WriteLine("Students coming from Surat");
            foreach(University u1 in output1)
            {
                Console.WriteLine(u1.SName);
            }
            var output2 = from m in listStudents
                          group m by m.Phone into groups
                          select groups;

            //var output4 = from m1 in output2
            //              where m1.Key[0] == 7
            //              select m1;
            Console.WriteLine("Students phone num starts with 7");
            foreach (var k in output2)
            {
                string s1 = k.Key.ToString();
                Int64 s2;
                
                if(s1[0]=='7')
                {
                    s2 = Convert.ToInt64(s1);
                    var v1 = from d in listStudents
                             where d.Phone == s2
                             select d.SId;
                    foreach (var t in v1)
                    {
                        Console.WriteLine(t.ToString());
                    }
                    
                    Console.WriteLine(s1);
                }
            }

            //var output3 = listStudents.Where(x => x.Sem == 5 && x.Branch=="CE");
            var output3 = from m in listStudents
                          where m.Sem == 5 && m.Branch == "CE"
                          select m;
            Console.WriteLine("Students who are in 5th Sem CE");
            foreach(var s3 in output3)
            {
                Console.WriteLine(s3.SName);
            }
            Console.ReadKey();
        }
    }

    public class University
    {
        public string SId { get; set; }
        public string SName { get; set; }
        public Int64 Phone { get; set; }
        public string City { get; set; }
        public int Sem { get; set; }
        public float Cpi { get; set; }
        public int QuizPart { get; set; }
        public string  Branch { get; set; }

        public static List<University> InitializeStudents()
        {
            List<University> productList = new List<University>();
            productList.Add(new University { SId = "1", SName = "Apurva", Phone = 9876543210, City = "Bhavnagar", Sem = 1, Cpi = 0.0F, QuizPart = 1, Branch = "CE" });
            productList.Add(new University { SId = "2", SName = "Avani", Phone = 7456543210, City = "Surat", Sem = 1, Cpi = 0.0F, QuizPart = 1, Branch = "CE" });
            productList.Add(new University { SId = "3", SName = "Anjali", Phone = 8976543210, City = "Surat", Sem = 1, Cpi = 0.0F, QuizPart = 1, Branch = "CE" });
            productList.Add(new University { SId = "4", SName = "Bhavya", Phone = 7456577210, City = "Nadiad", Sem = 5, Cpi = 0.0F, QuizPart = 1, Branch = "CE" });
            productList.Add(new University { SId = "5", SName = "Priti", Phone = 8976543210, City = "Sihor", Sem = 1, Cpi = 0.0F, QuizPart = 1, Branch = "CE" });
            return productList;
        }

    }

   
}
