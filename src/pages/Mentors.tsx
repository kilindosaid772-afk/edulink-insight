import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Phone, MessageCircle, Calendar, Star, UserPlus } from "lucide-react";

const mentorsData = [
  {
    id: "MNT001",
    name: "Dr. James Wilson",
    expertise: ["Mathematics", "Physics"],
    rating: 4.9,
    totalCalls: 156,
    activeCalls: 8,
    availability: "Available",
    nextSlot: "Today 2:00 PM",
    studentsHelped: 34,
  },
  {
    id: "MNT002",
    name: "Prof. Sarah Martinez",
    expertise: ["Chemistry", "Biology"],
    rating: 4.8,
    totalCalls: 203,
    activeCalls: 12,
    availability: "Busy",
    nextSlot: "Tomorrow 10:00 AM",
    studentsHelped: 67,
  },
  {
    id: "MNT003",
    name: "Dr. Michael Lee",
    expertise: ["English Literature", "History"],
    rating: 4.7,
    totalCalls: 189,
    activeCalls: 6,
    availability: "Available",
    nextSlot: "Today 4:30 PM",
    studentsHelped: 45,
  },
];

export default function Mentors() {
  const getAvailabilityBadge = (status: string) => {
    return status === "Available" ? (
      <Badge className="bg-accent/10 text-accent border-accent/20">Available</Badge>
    ) : (
      <Badge variant="outline" className="text-muted-foreground">Busy</Badge>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Mentors</h1>
          <p className="text-muted-foreground">Manage mentor relationships and call schedules</p>
        </div>
        <Button className="bg-gradient-primary text-primary-foreground">
          <UserPlus className="mr-2 h-4 w-4" />
          Add Mentor
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="card-gradient">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Mentors</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mentorsData.length}</div>
          </CardContent>
        </Card>
        <Card className="card-gradient">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Available Now</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-accent">
              {mentorsData.filter(m => m.availability === "Available").length}
            </div>
          </CardContent>
        </Card>
        <Card className="card-gradient">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active Calls</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {mentorsData.reduce((acc, m) => acc + m.activeCalls, 0)}
            </div>
          </CardContent>
        </Card>
        <Card className="card-gradient">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Average Rating</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-chart-3">
              {(mentorsData.reduce((acc, m) => acc + m.rating, 0) / mentorsData.length).toFixed(1)}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Mentor Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {mentorsData.map((mentor) => (
          <Card key={mentor.id} className="card-gradient hover-lift transition-smooth">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-gradient-primary text-primary-foreground font-medium">
                      {mentor.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{mentor.name}</CardTitle>
                    <div className="flex items-center space-x-1 mt-1">
                      <Star className="h-4 w-4 fill-chart-3 text-chart-3" />
                      <span className="text-sm font-medium">{mentor.rating}</span>
                      <span className="text-xs text-muted-foreground">({mentor.totalCalls} calls)</span>
                    </div>
                  </div>
                </div>
                {getAvailabilityBadge(mentor.availability)}
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {/* Expertise */}
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-2">Expertise</p>
                <div className="flex flex-wrap gap-1">
                  {mentor.expertise.map((subject) => (
                    <Badge key={subject} variant="outline" className="text-xs">
                      {subject}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-2 bg-muted/30 rounded-lg">
                  <div className="text-lg font-bold">{mentor.activeCalls}</div>
                  <div className="text-xs text-muted-foreground">Active Calls</div>
                </div>
                <div className="p-2 bg-muted/30 rounded-lg">
                  <div className="text-lg font-bold">{mentor.studentsHelped}</div>
                  <div className="text-xs text-muted-foreground">Students Helped</div>
                </div>
              </div>

              {/* Next Available */}
              <div className="p-3 bg-accent/5 border border-accent/20 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Next Available</p>
                    <p className="text-xs text-muted-foreground">{mentor.nextSlot}</p>
                  </div>
                  <Calendar className="h-4 w-4 text-accent" />
                </div>
              </div>

              {/* Actions */}
              <div className="flex space-x-2">
                <Button variant="outline" className="flex-1" size="sm">
                  <Phone className="mr-2 h-4 w-4" />
                  Schedule Call
                </Button>
                <Button variant="outline" className="flex-1" size="sm">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Message
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Calls */}
      <Card className="card-gradient">
        <CardHeader>
          <CardTitle>Recent Mentor Calls</CardTitle>
          <CardDescription>Latest mentor sessions and outcomes</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { mentor: "Dr. James Wilson", student: "Sarah Johnson", subject: "Mathematics", duration: "45 min", rating: 5, time: "2 hours ago" },
              { mentor: "Prof. Sarah Martinez", student: "Michael Chen", subject: "Chemistry", duration: "30 min", rating: 4, time: "4 hours ago" },
              { mentor: "Dr. Michael Lee", student: "Emma Davis", subject: "English", duration: "40 min", rating: 5, time: "6 hours ago" },
              { mentor: "Dr. James Wilson", student: "David Wilson", subject: "Physics", duration: "35 min", rating: 5, time: "1 day ago" },
            ].map((call, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="text-xs">
                        {call.mentor.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{call.mentor}</p>
                      <p className="text-sm text-muted-foreground">with {call.student}</p>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <p className="text-sm font-medium">{call.subject}</p>
                  <p className="text-xs text-muted-foreground">{call.duration}</p>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center space-x-1">
                    {[...Array(call.rating)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-chart-3 text-chart-3" />
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground">{call.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}