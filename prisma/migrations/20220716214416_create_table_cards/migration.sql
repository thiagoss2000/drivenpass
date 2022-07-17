-- CreateTable
CREATE TABLE "Cards" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "holdername" TEXT NOT NULL,
    "cvv" INTEGER NOT NULL,
    "expiration_date" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "is_virtual" BOOLEAN NOT NULL,

    CONSTRAINT "Cards_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserCards" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "cardId" INTEGER NOT NULL,

    CONSTRAINT "UserCards_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserCards" ADD CONSTRAINT "UserCards_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserCards" ADD CONSTRAINT "UserCards_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "Cards"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
