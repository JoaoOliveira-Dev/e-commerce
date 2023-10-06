import axios from "axios";

import Registrar from "@/components/registrar/registrar";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export default function registrar() {
  return <Registrar />;
}
