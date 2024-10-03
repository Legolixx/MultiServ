"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <section className="flex w-full h-full items-center justify-center mb-28">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Registrar</CardTitle>
          <CardDescription>Solicite uma revisão de perfil</CardDescription>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target as HTMLFormElement);
              const userData = {
                name: formData.get("name"),
                gender: formData.get("gender"),
                age: formData.get("age"),
                email: formData.get("email"),
                phone: formData.get("phone"),
                address: formData.get("address"),
              };
              console.log(userData);
            }}
          >
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome</Label>
                  <Input name="name" placeholder="Digite o seu nome" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gender">Gênero</Label>
                  <Select name="gender" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o gênero" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Masculino</SelectItem>
                      <SelectItem value="female">Feminino</SelectItem>
                      <SelectItem value="other">Outros</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="age">Idade</Label>
                  <Input
                    name="age"
                    type="number"
                    min="18"
                    max="100"
                    placeholder="Enter your age"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Digite seu Email"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Telefone</Label>
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Digite seu telefone"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Endereço</Label>
                <Input
                  name="address"
                  placeholder="Digite seu endereço"
                  required
                />
              </div>
            </div>
            <Button type="submit" className="mt-6 w-full">
              Solicitar revisão
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
