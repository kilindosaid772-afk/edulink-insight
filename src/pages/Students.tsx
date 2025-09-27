import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Filter, UserPlus, Download, Eye, Edit } from "lucide-react";

// Mock student data
const studentsData = [
  {
    id: "STU001",
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    grade: "Grade 10",
    lessonsCompleted: 45,
    quizScore: 87,
    peerInteractions: 23,
    mentorCalls: 4,
    airtimeEarned: "₦2,500",
    status: "Active",
    lastActivity: "2 hours ago",
  },
  {
    id: "STU002",
    name: "Michael Chen",
    email: "michael.chen@email.com",
    grade: "Grade 11",
    lessonsCompleted: 38,
    quizScore: 92,
    peerInteractions: 31,
    mentorCalls: 6,
    airtimeEarned: "₦3,200",
    status: "Active",
    lastActivity: "1 day ago",
  },
  {
    id: "STU003",
    name: "Emma Davis",
    email: "emma.davis@email.com",
    grade: "Grade 9",
    lessonsCompleted: 52,
    quizScore: 78,
    peerInteractions: 18,
    mentorCalls: 3,
    airtimeEarned: "₦1,800",
    status: "Active",
    lastActivity: "3 hours ago",
  },
  {
    id: "STU004",
    name: "David Wilson",
    email: "david.wilson@email.com",
    grade: "Grade 12",
    lessonsCompleted: 67,
    quizScore: 94,
    peerInteractions: 42,
    mentorCalls: 8,
    airtimeEarned: "₦4,100",
    status: "Active",
    lastActivity: "30 minutes ago",
  },
  {
    id: "STU005",
    name: "Lisa Brown",
    email: "lisa.brown@email.com",
    grade: "Grade 10",
    lessonsCompleted: 23,
    quizScore: 65,
    peerInteractions: 12,
    mentorCalls: 2,
    airtimeEarned: "₦1,200",
    status: "Inactive",
    lastActivity: "1 week ago",
  },
];

export default function Students() {
  const [searchTerm, setSearchTerm] = useState("");
  const [gradeFilter, setGradeFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredStudents = studentsData.filter((student) => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGrade = gradeFilter === "all" || student.grade === gradeFilter;
    const matchesStatus = statusFilter === "all" || student.status.toLowerCase() === statusFilter.toLowerCase();
    
    return matchesSearch && matchesGrade && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    return status === "Active" ? (
      <Badge className="bg-accent/10 text-accent border-accent/20">Active</Badge>
    ) : (
      <Badge variant="outline" className="text-muted-foreground">Inactive</Badge>
    );
  };

  const getScoreBadge = (score: number) => {
    if (score >= 90) return <Badge className="bg-chart-2/10 text-chart-2 border-chart-2/20">Excellent</Badge>;
    if (score >= 80) return <Badge className="bg-primary/10 text-primary border-primary/20">Good</Badge>;
    if (score >= 70) return <Badge className="bg-chart-3/10 text-chart-3 border-chart-3/20">Fair</Badge>;
    return <Badge variant="outline" className="text-destructive border-destructive/20">Needs Help</Badge>;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Students</h1>
          <p className="text-muted-foreground">Manage and monitor student progress</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="border-border/50">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button className="bg-gradient-primary text-primary-foreground">
            <UserPlus className="mr-2 h-4 w-4" />
            Add Student
          </Button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="card-gradient">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Students</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{studentsData.length}</div>
          </CardContent>
        </Card>
        <Card className="card-gradient">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active Students</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-accent">
              {studentsData.filter(s => s.status === "Active").length}
            </div>
          </CardContent>
        </Card>
        <Card className="card-gradient">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Average Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {Math.round(studentsData.reduce((acc, s) => acc + s.quizScore, 0) / studentsData.length)}%
            </div>
          </CardContent>
        </Card>
        <Card className="card-gradient">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Airtime</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-chart-2">₦13,800</div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card className="card-gradient">
        <CardHeader>
          <CardTitle>Student Management</CardTitle>
          <CardDescription>Filter and search through student records</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by name, email, or student ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-muted/30 border-border/50"
              />
            </div>
            <Select value={gradeFilter} onValueChange={setGradeFilter}>
              <SelectTrigger className="w-48 bg-muted/30 border-border/50">
                <Filter className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Filter by grade" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Grades</SelectItem>
                <SelectItem value="Grade 9">Grade 9</SelectItem>
                <SelectItem value="Grade 10">Grade 10</SelectItem>
                <SelectItem value="Grade 11">Grade 11</SelectItem>
                <SelectItem value="Grade 12">Grade 12</SelectItem>
              </SelectContent>
            </Select>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-48 bg-muted/30 border-border/50">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Students Table */}
          <div className="rounded-md border border-border/50 overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/30">
                  <TableHead>Student</TableHead>
                  <TableHead>Grade</TableHead>
                  <TableHead>Lessons</TableHead>
                  <TableHead>Quiz Score</TableHead>
                  <TableHead>Interactions</TableHead>
                  <TableHead>Mentor Calls</TableHead>
                  <TableHead>Airtime</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Last Activity</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredStudents.map((student) => (
                  <TableRow key={student.id} className="hover:bg-muted/30 transition-colors">
                    <TableCell>
                      <div>
                        <div className="font-medium">{student.name}</div>
                        <div className="text-sm text-muted-foreground">{student.email}</div>
                        <div className="text-xs text-muted-foreground">{student.id}</div>
                      </div>
                    </TableCell>
                    <TableCell>{student.grade}</TableCell>
                    <TableCell className="font-medium">{student.lessonsCompleted}</TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="font-medium">{student.quizScore}%</div>
                        {getScoreBadge(student.quizScore)}
                      </div>
                    </TableCell>
                    <TableCell>{student.peerInteractions}</TableCell>
                    <TableCell>{student.mentorCalls}</TableCell>
                    <TableCell className="font-medium text-chart-2">{student.airtimeEarned}</TableCell>
                    <TableCell>{getStatusBadge(student.status)}</TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {student.lastActivity}
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {filteredStudents.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              No students found matching your criteria.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}