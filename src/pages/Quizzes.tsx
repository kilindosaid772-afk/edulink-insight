import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ClipboardCheck, Plus, Eye, Edit, BarChart3 } from "lucide-react";

const quizzesData = [
  {
    id: "QZ001",
    title: "Introduction to Algebra",
    subject: "Mathematics",
    questions: 15,
    duration: "30 min",
    completions: 87,
    averageScore: 78,
    status: "Active",
    created: "2 days ago",
    difficulty: "Beginner",
  },
  {
    id: "QZ002",
    title: "Chemical Reactions",
    subject: "Chemistry",
    questions: 20,
    duration: "45 min",
    completions: 64,
    averageScore: 82,
    status: "Active",
    created: "5 days ago",
    difficulty: "Intermediate",
  },
  {
    id: "QZ003",
    title: "World War II",
    subject: "History",
    questions: 12,
    duration: "25 min",
    completions: 92,
    averageScore: 85,
    status: "Active",
    created: "1 week ago",
    difficulty: "Beginner",
  },
  {
    id: "QZ004",
    title: "Advanced Calculus",
    subject: "Mathematics",
    questions: 25,
    duration: "60 min",
    completions: 23,
    averageScore: 71,
    status: "Draft",
    created: "3 days ago",
    difficulty: "Advanced",
  },
];

export default function Quizzes() {
  const getStatusBadge = (status: string) => {
    return status === "Active" ? (
      <Badge className="bg-accent/10 text-accent border-accent/20">Active</Badge>
    ) : (
      <Badge variant="outline" className="text-muted-foreground">Draft</Badge>
    );
  };

  const getDifficultyBadge = (difficulty: string) => {
    const colors = {
      Beginner: "bg-chart-2/10 text-chart-2 border-chart-2/20",
      Intermediate: "bg-chart-3/10 text-chart-3 border-chart-3/20", 
      Advanced: "bg-chart-5/10 text-chart-5 border-chart-5/20",
    };
    return <Badge className={colors[difficulty as keyof typeof colors]}>{difficulty}</Badge>;
  };

  const getScoreColor = (score: number) => {
    if (score >= 85) return "text-chart-2";
    if (score >= 75) return "text-primary";
    if (score >= 65) return "text-chart-3";
    return "text-chart-5";
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Quizzes</h1>
          <p className="text-muted-foreground">Create and manage student assessments</p>
        </div>
        <Button className="bg-gradient-primary text-primary-foreground">
          <Plus className="mr-2 h-4 w-4" />
          Create Quiz
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="card-gradient">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Quizzes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{quizzesData.length}</div>
          </CardContent>
        </Card>
        <Card className="card-gradient">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active Quizzes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-accent">
              {quizzesData.filter(q => q.status === "Active").length}
            </div>
          </CardContent>
        </Card>
        <Card className="card-gradient">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Completions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {quizzesData.reduce((acc, q) => acc + q.completions, 0)}
            </div>
          </CardContent>
        </Card>
        <Card className="card-gradient">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Average Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">
              {Math.round(quizzesData.reduce((acc, q) => acc + q.averageScore, 0) / quizzesData.length)}%
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quiz Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {quizzesData.map((quiz) => (
          <Card key={quiz.id} className="card-gradient hover-lift transition-smooth">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CardTitle className="text-lg">{quiz.title}</CardTitle>
                    {getStatusBadge(quiz.status)}
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className="text-xs">{quiz.subject}</Badge>
                    {getDifficultyBadge(quiz.difficulty)}
                  </div>
                </div>
                <ClipboardCheck className="h-5 w-5 text-primary" />
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {/* Quiz Details */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Questions</p>
                  <p className="font-medium">{quiz.questions}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Duration</p>
                  <p className="font-medium">{quiz.duration}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Completions</p>
                  <p className="font-medium">{quiz.completions}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Created</p>
                  <p className="font-medium">{quiz.created}</p>
                </div>
              </div>

              {/* Average Score */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <p className="text-sm font-medium">Average Score</p>
                  <p className={`text-sm font-bold ${getScoreColor(quiz.averageScore)}`}>
                    {quiz.averageScore}%
                  </p>
                </div>
                <Progress value={quiz.averageScore} className="h-2" />
              </div>

              {/* Completion Rate */}
              <div className="p-3 bg-muted/30 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Completion Rate</span>
                  <span className="text-sm font-medium">
                    {Math.round((quiz.completions / 120) * 100)}%
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Eye className="mr-2 h-4 w-4" />
                  View
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Edit className="mr-2 h-4 w-4" />
                  Edit
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <BarChart3 className="mr-2 h-4 w-4" />
                  Analytics
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Quiz Activity */}
      <Card className="card-gradient">
        <CardHeader>
          <CardTitle>Recent Quiz Activity</CardTitle>
          <CardDescription>Latest quiz completions and submissions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { student: "Sarah Johnson", quiz: "Introduction to Algebra", score: 87, time: "15 min ago", status: "Completed" },
              { student: "Michael Chen", quiz: "Chemical Reactions", score: 92, time: "32 min ago", status: "Completed" },
              { student: "Emma Davis", quiz: "World War II", score: 78, time: "1 hour ago", status: "Completed" },
              { student: "David Wilson", quiz: "Introduction to Algebra", score: 94, time: "2 hours ago", status: "Completed" },
              { student: "Lisa Brown", quiz: "Chemical Reactions", score: null, time: "In progress", status: "In Progress" },
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <ClipboardCheck className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{activity.student}</p>
                    <p className="text-sm text-muted-foreground">{activity.quiz}</p>
                  </div>
                </div>
                
                <div className="text-right">
                  {activity.score ? (
                    <p className={`font-medium ${getScoreColor(activity.score)}`}>
                      {activity.score}%
                    </p>
                  ) : (
                    <Badge variant="outline" className="text-chart-3 border-chart-3/20">
                      In Progress
                    </Badge>
                  )}
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}