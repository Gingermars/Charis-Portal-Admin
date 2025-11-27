// src/pages/GroupsList.jsx (or RegisteredGroups.jsx)
import React from "react";
import Groupcard from "../components/Groupcard";
import SearchActionBar from "../components/SearchActionBar";

const RegisteredGroups = () => {
  // Sample data - replace with API call later
  const groups = [
    {
      id: "GRP001",
      name: "Focal Group loan",
      status: "Active",
      type: "Joint Liability Group (JLG)",
      memberCount: 12,
      leader: "Grace Adebayo",
      formationDate: "2024-02-20",
      loanOfficer: "Sarah Ibrahim",
      members: [
        {
          id: "MEM001",
          name: "Grace Adebayo",
          phone: "+234 801 234 5678",
          email: "grace@example.com",
        },
        {
          id: "MEM002",
          name: "Chioma Okafor",
          phone: "+234 802 345 6789",
          email: "chioma@example.com",
        },
        {
          id: "MEM003",
          name: "Fatima Abubakar",
          phone: "+234 803 456 7890",
          email: "fatima@example.com",
        },
        {
          id: "MEM004",
          name: "Amina Mohammed",
          phone: "+234 804 567 8901",
          email: "amina@example.com",
        },
        {
          id: "MEM005",
          name: "Blessing Eze",
          phone: "+234 805 678 9012",
          email: "blessing@example.com",
        },
        {
          id: "MEM006",
          name: "Folake Williams",
          phone: "+234 806 789 0123",
          email: "folake@example.com",
        },
        {
          id: "MEM007",
          name: "Ngozi Okeke",
          phone: "+234 807 890 1234",
          email: "ngozi@example.com",
        },
        {
          id: "MEM008",
          name: "Aisha Yusuf",
          phone: "+234 808 901 2345",
          email: "aisha@example.com",
        },
        {
          id: "MEM009",
          name: "Tunde Adeyemi",
          phone: "+234 809 012 3456",
          email: "tunde@example.com",
        },
        {
          id: "MEM010",
          name: "Zainab Ibrahim",
          phone: "+234 810 123 4567",
          email: "zainab@example.com",
        },
        {
          id: "MEM011",
          name: "Oluwaseun Balogun",
          phone: "+234 811 234 5678",
          email: "seun@example.com",
        },
        {
          id: "MEM012",
          name: "Hauwa Musa",
          phone: "+234 812 345 6789",
          email: "hauwa@example.com",
        },
      ],
    },
    {
      id: "GRP002",
      name: "Women United VSLA",
      status: "Active",
      type: "Village Savings & Loans Association (VSLA)",
      memberCount: 15,
      leader: "Adaeze Nwosu",
      formationDate: "2024-01-15",
      loanOfficer: "Sarah Ibrahim",
      members: [
        {
          id: "MEM013",
          name: "Adaeze Nwosu",
          phone: "+234 813 456 7890",
          email: "adaeze@example.com",
        },
        {
          id: "MEM014",
          name: "Kemi Ajayi",
          phone: "+234 814 567 8901",
          email: "kemi@example.com",
        },
        {
          id: "MEM015",
          name: "Rekiya Bello",
          phone: "+234 815 678 9012",
          email: "rekiya@example.com",
        },
        {
          id: "MEM016",
          name: "Nneka Ugochukwu",
          phone: "+234 816 789 0123",
          email: "nneka@example.com",
        },
        {
          id: "MEM017",
          name: "Safiya Garba",
          phone: "+234 817 890 1234",
          email: "safiya@example.com",
        },
        {
          id: "MEM018",
          name: "Chinyere Obi",
          phone: "+234 818 901 2345",
          email: "chinyere@example.com",
        },
        {
          id: "MEM019",
          name: "Bintu Lawal",
          phone: "+234 819 012 3456",
          email: "bintu@example.com",
        },
        {
          id: "MEM020",
          name: "Ify Okoro",
          phone: "+234 820 123 4567",
          email: "ify@example.com",
        },
        {
          id: "MEM021",
          name: "Mariam Sadiq",
          phone: "+234 821 234 5678",
          email: "mariam@example.com",
        },
        {
          id: "MEM022",
          name: "Patience Udoh",
          phone: "+234 822 345 6789",
          email: "patience@example.com",
        },
        {
          id: "MEM023",
          name: "Halima Bala",
          phone: "+234 823 456 7890",
          email: "halima@example.com",
        },
        {
          id: "MEM024",
          name: "Ego Okonkwo",
          phone: "+234 824 567 8901",
          email: "ego@example.com",
        },
        {
          id: "MEM025",
          name: "Habiba Aliyu",
          phone: "+234 825 678 9012",
          email: "habiba@example.com",
        },
        {
          id: "MEM026",
          name: "Ada Nnamdi",
          phone: "+234 826 789 0123",
          email: "ada@example.com",
        },
        {
          id: "MEM027",
          name: "Rukayat Ahmed",
          phone: "+234 827 890 1234",
          email: "rukayat@example.com",
        },
      ],
    },
    {
      id: "GRP003",
      name: "Progressive Cooperative",
      status: "Pending",
      type: "Cooperative",
      memberCount: 8,
      leader: "Emmanuel Okonkwo",
      formationDate: "2024-03-10",
      loanOfficer: "Sarah Ibrahim",
      members: [
        {
          id: "MEM028",
          name: "Emmanuel Okonkwo",
          phone: "+234 828 901 2345",
          email: "emmanuel@example.com",
        },
        {
          id: "MEM029",
          name: "Ibrahim Suleiman",
          phone: "+234 829 012 3456",
          email: "ibrahim@example.com",
        },
        {
          id: "MEM030",
          name: "Oluwole Adeyemi",
          phone: "+234 830 123 4567",
          email: "oluwole@example.com",
        },
        {
          id: "MEM031",
          name: "Usman Abdullahi",
          phone: "+234 831 234 5678",
          email: "usman@example.com",
        },
        {
          id: "MEM032",
          name: "Chukwudi Nnaji",
          phone: "+234 832 345 6789",
          email: "chukwudi@example.com",
        },
        {
          id: "MEM033",
          name: "Musa Kazeem",
          phone: "+234 833 456 7890",
          email: "musa@example.com",
        },
        {
          id: "MEM034",
          name: "Emeka Eze",
          phone: "+234 834 567 8901",
          email: "emeka@example.com",
        },
        {
          id: "MEM035",
          name: "Yusuf Bello",
          phone: "+234 835 678 9012",
          email: "yusuf@example.com",
        },
      ],
    },

    {
      id: "GRP004",
      name: "Unity Joint Liability Group",
      status: "Active",
      type: "Joint Liability Group (JLG)",
      memberCount: 10,
      leader: "Chiamaka Okafor",
      formationDate: "2024-02-28",
      loanOfficer: "Sarah Ibrahim",
      members: [
        {
          id: "MEM036",
          name: "Chiamaka Okafor",
          phone: "+234 836 789 0123",
          email: "chiamaka@example.com",
        },
        {
          id: "MEM037",
          name: "Abubakar Hassan",
          phone: "+234 837 890 1234",
          email: "abubakar@example.com",
        },
        {
          id: "MEM038",
          name: "Ifeoma Nwachukwu",
          phone: "+234 838 901 2345",
          email: "ifeoma@example.com",
        },
        {
          id: "MEM039",
          name: "Sani Umar",
          phone: "+234 839 012 3456",
          email: "sani@example.com",
        },
        {
          id: "MEM040",
          name: "Joy Okechukwu",
          phone: "+234 840 123 4567",
          email: "joy@example.com",
        },
        {
          id: "MEM041",
          name: "Ahmed Tijani",
          phone: "+234 841 234 5678",
          email: "ahmed@example.com",
        },
        {
          id: "MEM042",
          name: "Chinwe Nnamani",
          phone: "+234 842 345 6789",
          email: "chinwe@example.com",
        },
        {
          id: "MEM043",
          name: "Bashir Salisu",
          phone: "+234 843 456 7890",
          email: "bashir@example.com",
        },
        {
          id: "MEM044",
          name: "Nkechi Chukwuma",
          phone: "+234 844 567 8901",
          email: "nkechi@example.com",
        },
        {
          id: "MEM045",
          name: "Aliyu Danjuma",
          phone: "+234 845 678 9012",
          email: "aliyu@example.com",
        },
      ],
    },
  ];

  return (
    <>
      {/* Action / Search bar placed below the header */}
      <SearchActionBar />

      {/* Groups Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {groups.map((group) => (
          <Groupcard key={group.id} group={group} />
        ))}
      </div>
    </>
  );
};

export default RegisteredGroups;
