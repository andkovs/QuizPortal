using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace QuizCenterRest.DAL
{
    public class User
    {
        [Key]
        public int Id { get; set; }

        public String Login { get; set; }

        public String Password { get; set; }

        public List<Role> Roles { get; set; }

        public List<Course> Courses { get; set; }
    }

    public class Profile
    {
        [Key]
        public int Id { get; set; }

        public int? UsreId { get; set; }

        public String Email { get; set; }

        public String FirstName { get; set; }

        public String LastName { get; set; }

        public String MiddleName { get; set; }

        public String Phone { get; set; }
    }

    public class Role 
    {
        [Key]
        public int Id { get; set; }

        public String Title { get; set; }

        public List<User> Users { get; set; }
    }

    public class Course
    {
        [Key]
        public int Id { get; set; }

        public String Title { get; set; }

        public List<User> Users { get; set; }
    }

    public class Chapter
    { 
        [Key]
        public int Id { get; set; }

        public String Title { get; set; }

        public int CourseId { get; set; }

        [ForeignKey("CourseId")]
        public virtual Course Course { get; set; }
    }

    public class Topic
    {
        [Key]
        public int Id { get; set; }

        public String Title { get; set; }

        public int ChapterId { get; set; }

        [ForeignKey("ChapterId")]
        public virtual Chapter Chapter { get; set; }
    }

    public class QuestionList
    {
        [Key]
        public int Id { get; set; }

        public String Title { get; set; }

        public int ChapterId { get; set; }

        [ForeignKey("ChapterId")]
        public virtual Chapter Chapter { get; set; }
    }

    public class Question
    {
        [Key]
        public int Id { get; set; }

        public String Title { get; set; }

        public Boolean AsRadio { get; set; } //radio or checkbox answers

        public int QuestionListId { get; set; }

        [ForeignKey("QuestionListId")]
        public virtual QuestionList QuestionList { get; set; }
    }

    public class Answer
    {
        [Key]
        public int Id { get; set; }

        public String Title { get; set; }

        public Boolean asCorrect { get; set; }

        public int QuestionId { get; set; }

        [ForeignKey("QuestionId")]
        public virtual Question Question { get; set; }
    }





    


}