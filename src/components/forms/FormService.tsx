"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const RequestForm: React.FC = () => {
  const { toast } = useToast();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const generateTimes = () => {
    const times: string[] = [];
    for (let i = 8; i <= 10; i++) {
      times.push(`${i.toString().padStart(2, "0")}:00`);
      times.push(`${i.toString().padStart(2, "0")}:30`);
    }
    for (let i = 13; i <= 16; i++) {
      times.push(`${i.toString().padStart(2, "0")}:00`);
      times.push(`${i.toString().padStart(2, "0")}:30`);
    }
    return times;
  };

  const availableTimes = generateTimes();

  const handleSubmit = () => {
    if (!selectedDate || !selectedTime) {
      toast({
        title: "Erro ao enviar orçamento",
        description: "Por favor, selecione a data e o horário.",
        duration: 3000,
      });
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSelectedDate(undefined);
      setSelectedTime(null);
      toast({
        title: "Orçamento enviado com sucesso!",
        description: "Seu orçamento foi enviado.",
        duration: 3000,
      });
    }, 2000);
  };

  return (
    <div className="flex flex-col w-full md:w-1/2 justify-start space-y-6 p-6 rounded-md shadow-md">
      <h4 className="text-xl font-semibold">Solicitar Orçamento</h4>

      <div className="flex flex-col space-y-2">
        <label className="text-sm font-medium">Selecione o dia</label>
        <div className="flex items-center space-x-2">
          <Input
            type="text"
            placeholder="Selecione uma data"
            value={selectedDate ? format(selectedDate, "dd/MM/yyyy") : ""}
            readOnly
          />
          <Button variant="outline" onClick={() => setSelectedDate(new Date())}>
            <CalendarIcon className="mr-2 h-4 w-4" />
            Selecionar
          </Button>
        </div>
        <Calendar
          selected={selectedDate}
          onSelect={(date) => {
            if (date) {
              setSelectedDate(date);
            }
          }}
          mode="single"
          className="border"
        />
      </div>

      <div className="flex flex-col space-y-2">
        <label className="text-sm font-medium">Selecione o horário</label>
        <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="w-[160px] justify-start text-left font-normal"
            >
              <Clock className="mr-1 h-4 w-4 -translate-x-1" />
              <span>{selectedTime ? selectedTime : "Selecionar horário"}</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <div className="grid grid-cols-4 gap-2 p-4">
              {availableTimes.map((time, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="rounded-md px-3 py-1 text-sm font-medium hover:bg-muted/50"
                  onClick={() => {
                    setSelectedTime(time);
                    setPopoverOpen(false);
                  }}
                >
                  {time}
                </Button>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      </div>

      <Button className="w-full" onClick={handleSubmit} disabled={loading}>
        {loading ? "Enviando..." : "Solicitar Orçamento"}
      </Button>
    </div>
  );
};

export default RequestForm;
