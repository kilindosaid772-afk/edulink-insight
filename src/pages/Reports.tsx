import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
  AreaChart,
  Area,
} from "recharts";
import { Download, FileText, Calendar, TrendingUp } from "lucide-react";

const monthlyData = [
  { month: "Jan", students: 145, lessons: 1420, quizzes: 340, rewards: 8500 },
  { month: "Feb", students: 162, lessons: 1680, quizzes: 390, rewards: 9200 },
  { month: "Mar", students: 178, lessons: 1890, quizzes: 445, rewards: 10100 },
  { month: "Apr", students: 195, lessons: 2150, quizzes: 520, rewards: 11800 },
  { month: "May", students: 210, lessons: 2340, quizzes: 580, rewards: 12500 },
  { month: "Jun", students: 225, lessons: 2500, quizzes: 620, rewards: 13200 },
];

const engagementTrends = [
  { week: "Week 1", interactions: 245, mentorCalls: 32, completion: 78 },
  { week: "Week 2", interactions: 268, mentorCalls: 28, completion: 82 },
  { week: "Week 3", interactions: 298, mentorCalls: 45, completion: 85 },
  { week: "Week 4", interactions: 325, mentorCalls: 38, completion: 88 },
];

const reportTemplates = [
  {
    title: "Monthly Performance Report",
    description: "Comprehensive overview of student performance and engagement",
    lastGenerated: "2 days ago",
    format: "PDF",
  },
  {
    title: "Student Progress Summary",
    description: "Individual student progress and achievement tracking",
    lastGenerated: "1 week ago",
    format: "Excel",
  },
  {
    title: "Mentor Activity Report",
    description: "Detailed analysis of mentor sessions and effectiveness",
    lastGenerated: "3 days ago",
    format: "PDF",
  },
  {
    title: "Reward Distribution Analysis",
    description: "Airtime reward distribution patterns and insights",
    lastGenerated: "5 days ago",
    format: "Excel",
  },
];

export default function Reports() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Reports & Analytics</h1>
          <p className="text-muted-foreground">Comprehensive insights and performance analytics</p>
        </div>
        <div className="flex gap-2">
          <Select>
            <SelectTrigger className="w-48">
              <Calendar className="mr-2 h-4 w-4" />
              <SelectValue placeholder="Select time range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 3 months</SelectItem>
              <SelectItem value="1y">Last year</SelectItem>
            </SelectContent>
          </Select>
          <Button className="bg-gradient-primary text-primary-foreground">
            <Download className="mr-2 h-4 w-4" />
            Export Data
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="card-gradient">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Growth Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-accent">+18.5%</div>
            <p className="text-xs text-muted-foreground mt-1">Student enrollment</p>
          </CardContent>
        </Card>
        <Card className="card-gradient">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Completion Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">87.3%</div>
            <p className="text-xs text-muted-foreground mt-1">Average completion</p>
          </CardContent>
        </Card>
        <Card className="card-gradient">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Engagement Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-chart-2">9.2/10</div>
            <p className="text-xs text-muted-foreground mt-1">Platform engagement</p>
          </CardContent>
        </Card>
        <Card className="card-gradient">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">ROI</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-chart-3">245%</div>
            <p className="text-xs text-muted-foreground mt-1">Return on investment</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Growth Chart */}
        <Card className="card-gradient hover-lift">
          <CardHeader>
            <CardTitle>Monthly Growth Trends</CardTitle>
            <CardDescription>Student enrollment and activity over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={monthlyData}>
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
                <Area
                  type="monotone"
                  dataKey="students"
                  stroke="hsl(var(--primary))"
                  fill="hsl(var(--primary))"
                  fillOpacity={0.1}
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Weekly Engagement */}
        <Card className="card-gradient hover-lift">
          <CardHeader>
            <CardTitle>Weekly Engagement Metrics</CardTitle>
            <CardDescription>Peer interactions and completion rates</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={engagementTrends}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="week" />
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
                />
                <Line
                  type="monotone"
                  dataKey="completion"
                  stroke="hsl(var(--accent))"
                  strokeWidth={2}
                  dot={{ fill: "hsl(var(--accent))", strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Performance Overview */}
      <Card className="card-gradient">
        <CardHeader>
          <CardTitle>Performance Overview</CardTitle>
          <CardDescription>Comprehensive platform metrics and KPIs</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={monthlyData}>
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
              <Bar dataKey="lessons" fill="hsl(var(--primary))" radius={[2, 2, 0, 0]} />
              <Bar dataKey="quizzes" fill="hsl(var(--accent))" radius={[2, 2, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Report Templates */}
      <Card className="card-gradient">
        <CardHeader>
          <CardTitle>Report Templates</CardTitle>
          <CardDescription>Pre-configured reports for quick insights</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {reportTemplates.map((template, index) => (
              <div key={index} className="p-4 border border-border/50 rounded-lg hover:bg-muted/30 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <FileText className="h-5 w-5 text-primary" />
                      <h3 className="font-medium">{template.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{template.description}</p>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline">{template.format}</Badge>
                      <span className="text-xs text-muted-foreground">
                        Last generated: {template.lastGenerated}
                      </span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Generate
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Insights and Recommendations */}
      <Card className="card-gradient">
        <CardHeader>
          <CardTitle>AI-Powered Insights</CardTitle>
          <CardDescription>Automated insights and recommendations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                insight: "Quiz completion rates increased by 23% this month",
                recommendation: "Consider introducing more interactive quiz formats",
                trend: "positive",
              },
              {
                insight: "Peer interactions are highest on weekday afternoons",
                recommendation: "Schedule group activities during peak engagement hours",
                trend: "positive",
              },
              {
                insight: "Some students show declining engagement in advanced topics",
                recommendation: "Implement personalized learning paths and additional mentor support",
                trend: "negative",
              },
              {
                insight: "Airtime rewards strongly correlate with lesson completion",
                recommendation: "Maintain current reward structure for optimal motivation",
                trend: "positive",
              },
            ].map((item, index) => (
              <div key={index} className="p-4 bg-muted/30 rounded-lg">
                <div className="flex items-start space-x-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    item.trend === "positive" ? "bg-accent/10" : "bg-chart-5/10"
                  }`}>
                    <TrendingUp className={`h-4 w-4 ${
                      item.trend === "positive" ? "text-accent" : "text-chart-5"
                    }`} />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{item.insight}</p>
                    <p className="text-sm text-muted-foreground mt-1">{item.recommendation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}