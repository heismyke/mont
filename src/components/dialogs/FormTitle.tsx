import { EditIcon } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useFormContext } from "@/context/FormContext";
import { Button } from "../ui/button";

export const FormTitleDialog = () => {
  const { formState, updateForm } = useFormContext();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <EditIcon size={20} className="text-gray-500 hover:text-gray-700" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-w-sm rounded-lg">
        <DialogHeader className="text-gray-700">
          <DialogTitle>Form Title</DialogTitle>
          <DialogDescription className="mt-1 text-sm">
            Name your form to help you identify it.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-2">
          <div className="grid gap-2">
            <Input
              type="text"
              value={formState.form.form_title || ""}
              onChange={(e) => updateForm({ form_title: e.target.value })}
              className="w-full px-3 py-1 text-gray-700 text-base border rounded-md "
              placeholder="Enter form title..."
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button size={"lg"} className="w-full">
              Save
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
