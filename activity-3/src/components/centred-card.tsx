import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function CentredCard({
  title,
  buttonText,
  children,
  onClick,
}: {
  title: string;
  buttonText: string;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <div className="h-screen flex flex-col gap-8 items-center justify-center">
      <Card className="p-8 max-w-md">
        <CardHeader>
          <CardTitle>
            <h3 className="text-center text-4xl">{title}</h3>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-8 items-center">
          <div className="flex flex-col gap-2 items-center">{children}</div>
          <Button size="lg" onClick={onClick}>
            {buttonText}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
