setwd("/home/rstudio")

library(variability)
library(openxlsx)

input <- read.csv("input.csv")

table <- ancova(input[c('DFT','DFS','ASI','PHT')], input$Genotype, input$Replication)

table <- geno.path(input$GYPP, input[c('DFT','DFS','ASI','PHT')],input$Genotype, input$Replication)
table <- pheno.corr(input[c('DFT','DFS','ASI','PHT')],input$Genotype, input$Replication)

write.xlsx(table, './output.xlsx')

print('done!')
