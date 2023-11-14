import { VirtualMachineSkuDto } from 'src/types/Catalog/VirtualMachineSkuDto.types';

export const defaultVirtualMachineSkuDtos: VirtualMachineSkuDto[] = [
  {
    ID: 'af4c02cc-37b5-43be-a976-25c971246553',
    Name: 'Standard_B2s',
    NumberOfCores: 2,
    Memory: 4096,
    MaxDataDisks: 4,
    MaxNics: 3,
    Published: true,
    Production: true,
    CanSupportDomainController: true,
    CanSupportVirtualization: false,
  },
  {
    ID: '4fa85f64-5717-4562-b3fc-2c667f66afa6',
    Name: 'Standard_B2ms',
    NumberOfCores: 2,
    Memory: 8192,
    MaxDataDisks: 4,
    MaxNics: 3,
    Published: true,
    Production: true,
    CanSupportDomainController: true,
    CanSupportVirtualization: false,
  },
  {
    ID: '1d7280f1-c3ae-494a-9874-487d29629cc8',
    Name: 'Standard_B4ms',
    NumberOfCores: 4,
    Memory: 16384,
    MaxDataDisks: 8,
    MaxNics: 4,
    Published: true,
    Production: true,
    CanSupportDomainController: true,
    CanSupportVirtualization: false,
  },
  {
    ID: 'e642f7b5-1f02-4c54-ae98-84a950ef7920',
    Name: 'Standard_D2s_v4',
    NumberOfCores: 2,
    Memory: 8192,
    MaxDataDisks: 4,
    MaxNics: 2,
    Published: true,
    Production: false,
    CanSupportDomainController: true,
    CanSupportVirtualization: true,
  },
  {
    ID: '400bba3b-3475-42ab-9e39-1763d5249a98',
    Name: 'Standard_D4s_v4',
    NumberOfCores: 4,
    Memory: 16384,
    MaxDataDisks: 8,
    MaxNics: 2,
    Published: true,
    Production: false,
    CanSupportDomainController: true,
    CanSupportVirtualization: true,
  },
];