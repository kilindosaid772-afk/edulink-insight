import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  Users,
  BookOpen,
  ClipboardCheck,
  Gift,
  TrendingUp,
  TrendingDown,
  Phone,
  MessageSquare,
} from "lucide-react";

const statsData = [
  { title: "Total Students", value: "1,247", change: "+12%", trend: "up", icon: Users },
  { title: "Lessons Completed", value: "8,532", change: "+8.2%", trend: "up", icon: BookOpen },
  { title: "Quizzes Completed", value: "2,156", change: "-2.1%", trend: "down", icon: ClipboardCheck },
  { title: "Airtime Distributed", value: "₦45,230", change: "+15%", trend: "up", icon: Gift },
];

const dailyLessons = [
  { date: "Mon", completed: 120 },
  { date: "Tue", completed: 145 },
  { date: "Wed", completed: 135 },
  { date: "Thu", completed: 158 },
  { date: "Fri", completed: 142 },
  { date: "Sat", completed: 98 },
  { date: "Sun", completed: 87 },
];

const engagementData = [
  { month: "Jan", interactions: 245, calls: 32 },
  { month: "Feb", interactions: 268, calls: 28 },
  { month: "Mar", interactions: 298, calls: 45 },
  { month: "Apr", interactions: 325, calls: 38 },
  { month: "May", interactions: 342, calls: 42 },
  { month: "Jun", interactions: 378, calls: 51 },
];

const quizScores = [
  { name: "Excellent (90-100%)", value: 35, color: "hsl(var(--chart-2))" },
  { name: "Good (70-89%)", value: 45, color: "hsl(var(--chart-1))" },
  { name: "Fair (50-69%)", value: 15, color: "hsl(var(--chart-3))" },
  { name: "Poor (<50%)", value: 5, color: "hsl(var(--chart-5))" },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">Monitor student engagement and platform performance</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsData.map((stat) => {
          const Icon = stat.icon;
          const isPositive = stat.trend === "up";
          
          return (
            <Card key={stat.title} className="card-gradient hover-lift transition-smooth">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  {isPositive ? (
                    <TrendingUp className="mr-1 h-3 w-3 text-accent" />
                  ) : (
                    <TrendingDown className="mr-1 h-3 w-3 text-destructive" />
                  )}
                  <span className={isPositive ? "text-accent" : "text-destructive"}>
                    {stat.change}
                  </span>
                  <span className="ml-1">from last month</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Daily Lessons Chart */}
        <Card className="card-gradient hover-lift">
          <CardHeader>
            <CardTitle>Daily Lessons Completed</CardTitle>
            <CardDescription>
              Number of lessons completed each day this week
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={dailyLessons}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Bar dataKey="completed" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Quiz Scores Distribution */}
        <Card className="card-gradient hover-lift">
          <CardHeader>
            <CardTitle>Quiz Score Distribution</CardTitle>
            <CardDescription>
              Performance breakdown of completed quizzes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={quizScores}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {quizScores.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Engagement Trends */}
      <Card className="card-gradient hover-lift">
        <CardHeader>
          <CardTitle>Student Engagement Trends</CardTitle>
          <CardDescription>
            Peer interactions and mentor calls over the past 6 months
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={engagementData}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
              <Line
                type="monotone"
                dataKey="interactions"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 4 }}
                name="Peer Interactions"
              />
              <Line
                type="monotone"
                dataKey="calls"
                stroke="hsl(var(--accent))"
                strokeWidth={2}
                dot={{ fill: "hsl(var(--accent))", strokeWidth: 2, r: 4 }}
                name="Mentor Calls"
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Recent Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="card-gradient">
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
            <CardDescription>Latest platform activities and updates</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { action: "Quiz completed", student: "Sarah Johnson", time: "2 min ago", type: "quiz" },
              { action: "Mentor call scheduled", student: "Michael Chen", time: "15 min ago", type: "call" },
              { action: "Peer interaction", student: "Emma Davis", time: "32 min ago", type: "interaction" },
              { action: "Lesson completed", student: "David Wilson", time: "1 hour ago", type: "lesson" },
            ].map((activity, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-muted/30">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  {activity.type === "quiz" && <ClipboardCheck className="h-4 w-4 text-primary" />}
                  {activity.type === "call" && <Phone className="h-4 w-4 text-accent" />}
                  {activity.type === "interaction" && <MessageSquare className="h-4 w-4 text-chart-3" />}
                  {activity.type === "lesson" && <BookOpen className="h-4 w-4 text-chart-2" />}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">{activity.action}</p>
                  <p className="text-xs text-muted-foreground">{activity.student}</p>
                </div>
                <Badge variant="outline" className="text-xs">
                  {activity.time}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="card-gradient">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Frequently used administrative tasks</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start" variant="outline">
              <Users className="mr-2 h-4 w-4" />
              Add New Student
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <ClipboardCheck className="mr-2 h-4 w-4" />
              Create Quiz
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Gift className="mr-2 h-4 w-4" />
              Distribute Rewards
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <BookOpen className="mr-2 h-4 w-4" />
              Schedule Lesson
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}