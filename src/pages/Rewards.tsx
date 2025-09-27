import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Gift, Smartphone, Plus, Send } from "lucide-react";

const rewardsData = [
  {
    id: "RW001",
    student: "Sarah Johnson",
    studentId: "STU001",
    totalEarned: 2500,
    distributed: 2000,
    pending: 500,
    lastReward: "₦200 - Quiz completion",
    rewardDate: "2 hours ago",
  },
  {
    id: "RW002",
    student: "Michael Chen",
    studentId: "STU002",
    totalEarned: 3200,
    distributed: 3200,
    pending: 0,
    lastReward: "₦300 - Peer interaction",
    rewardDate: "1 day ago",
  },
  {
    id: "RW003",
    student: "Emma Davis",
    studentId: "STU003",
    totalEarned: 1800,
    distributed: 1500,
    pending: 300,
    lastReward: "₦150 - Lesson completion",
    rewardDate: "3 hours ago",
  },
];

const rewardTypes = [
  { type: "Lesson Completion", amount: "₦50-100", color: "bg-chart-2/10 text-chart-2 border-chart-2/20" },
  { type: "Quiz Excellence", amount: "₦100-200", color: "bg-primary/10 text-primary border-primary/20" },
  { type: "Peer Interaction", amount: "₦75-150", color: "bg-chart-3/10 text-chart-3 border-chart-3/20" },
  { type: "Mentor Call", amount: "₦200-300", color: "bg-accent/10 text-accent border-accent/20" },
];

export default function Rewards() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Airtime Rewards</h1>
          <p className="text-muted-foreground">Manage student airtime rewards and distributions</p>
        </div>
        <Button className="bg-gradient-primary text-primary-foreground">
          <Send className="mr-2 h-4 w-4" />
          Distribute Rewards
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="card-gradient">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Distributed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-chart-2">₦45,230</div>
            <p className="text-xs text-muted-foreground mt-1">This month</p>
          </CardContent>
        </Card>
        <Card className="card-gradient">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Pending Rewards</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-chart-3">₦3,800</div>
            <p className="text-xs text-muted-foreground mt-1">Awaiting distribution</p>
          </CardContent>
        </Card>
        <Card className="card-gradient">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active Students</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-accent">
              {rewardsData.length}
            </div>
            <p className="text-xs text-muted-foreground mt-1">Earning rewards</p>
          </CardContent>
        </Card>
        <Card className="card-gradient">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Average per Student</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">₦1,567</div>
            <p className="text-xs text-muted-foreground mt-1">This month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Reward Types */}
        <Card className="card-gradient">
          <CardHeader>
            <CardTitle>Reward Structure</CardTitle>
            <CardDescription>Current airtime reward amounts by activity</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {rewardTypes.map((reward) => (
              <div key={reward.type} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div>
                  <p className="font-medium">{reward.type}</p>
                  <Badge className={reward.color} variant="outline">
                    {reward.amount}
                  </Badge>
                </div>
                <Gift className="h-5 w-5 text-muted-foreground" />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="card-gradient">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common reward management tasks</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start bg-gradient-primary text-primary-foreground">
              <Send className="mr-2 h-4 w-4" />
              Bulk Distribute Rewards
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Plus className="mr-2 h-4 w-4" />
              Add Manual Reward
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Smartphone className="mr-2 h-4 w-4" />
              Check Airtime Balance
            </Button>
          </CardContent>
        </Card>

        {/* Distribution Settings */}
        <Card className="card-gradient">
          <CardHeader>
            <CardTitle>Distribution Settings</CardTitle>
            <CardDescription>Configure automatic reward distribution</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Auto Distribution</span>
                <Badge className="bg-accent/10 text-accent border-accent/20">Enabled</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                Rewards are automatically distributed daily at 6:00 PM
              </p>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Minimum Threshold</span>
                <span className="text-sm font-bold">₦100</span>
              </div>
              <Progress value={75} className="h-2" />
              <p className="text-xs text-muted-foreground">
                Students must earn at least ₦100 before distribution
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Student Rewards Table */}
      <Card className="card-gradient">
        <CardHeader>
          <CardTitle>Student Reward Summary</CardTitle>
          <CardDescription>Individual student airtime earnings and distribution status</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {rewardsData.map((reward) => (
              <div key={reward.id} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-muted/40 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Gift className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">{reward.student}</p>
                    <p className="text-sm text-muted-foreground">{reward.studentId}</p>
                    <p className="text-xs text-muted-foreground">{reward.lastReward}</p>
                  </div>
                </div>
                
                <div className="text-center space-y-2">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-xs text-muted-foreground">Total Earned</p>
                      <p className="font-bold text-primary">₦{reward.totalEarned.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Distributed</p>
                      <p className="font-bold text-chart-2">₦{reward.distributed.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Pending</p>
                      <p className="font-bold text-chart-3">₦{reward.pending.toLocaleString()}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <Progress 
                      value={(reward.distributed / reward.totalEarned) * 100} 
                      className="h-2 w-48" 
                    />
                    <p className="text-xs text-muted-foreground">
                      {Math.round((reward.distributed / reward.totalEarned) * 100)}% distributed
                    </p>
                  </div>
                </div>
                
                <div className="text-right space-y-2">
                  <p className="text-xs text-muted-foreground">{reward.rewardDate}</p>
                  <Button size="sm" variant="outline">
                    <Send className="mr-2 h-4 w-4" />
                    Distribute
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Distributions */}
      <Card className="card-gradient">
        <CardHeader>
          <CardTitle>Recent Distributions</CardTitle>
          <CardDescription>Latest airtime reward distributions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { student: "Sarah Johnson", amount: "₦200", reason: "Quiz excellence (92%)", time: "2 hours ago", status: "Completed" },
              { student: "Michael Chen", amount: "₦300", reason: "Mentor call completion", time: "1 day ago", status: "Completed" },
              { student: "Emma Davis", amount: "₦150", reason: "Peer interaction bonus", time: "1 day ago", status: "Completed" },
              { student: "David Wilson", amount: "₦100", reason: "Lesson completion streak", time: "2 days ago", status: "Completed" },
            ].map((distribution, index) => (
              <div key={index} className="flex items-center justify-between p-3 border border-border/50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                    <Smartphone className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium">{distribution.student}</p>
                    <p className="text-sm text-muted-foreground">{distribution.reason}</p>
                  </div>
                </div>
                
                <div className="text-right">
                  <p className="font-bold text-chart-2">{distribution.amount}</p>
                  <div className="flex items-center space-x-2">
                    <Badge className="bg-accent/10 text-accent border-accent/20">
                      {distribution.status}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{distribution.time}</span>
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